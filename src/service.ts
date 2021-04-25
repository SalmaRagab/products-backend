import { Mapper } from "./mappers/mapper";
import { IProductDatabaseModel } from "./interfaces";
import { ProductRepository, CategoryRepository, ProviderRepository } from "./repositories";

export class Service {
    private productRepository: ProductRepository;
    private categoryRepository: CategoryRepository;
    private providerRepository: ProviderRepository;

    constructor() {
        this.productRepository = new ProductRepository();
        this.categoryRepository = new CategoryRepository();
        this.providerRepository = new ProviderRepository();
    }

    public async getProducts(req, res) {
        try {
            const filterOptions = { categoryId: req.query.categoryId as string };
            let productDatabaseModels: IProductDatabaseModel[] = await this.productRepository.getAll(req.paginationOptions, filterOptions);
            const products = Mapper.mapProductsFromDatabaseModelToBusinessModel(productDatabaseModels);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async toggleFeaturedProduct(req, res) {
        try {
            const id = req.params.id;
            const isFeatureStatusToggled = await this.productRepository.toggleFeaturedProduct(id);
            if (isFeatureStatusToggled) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: `product with id: ${id} isn't found` })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    public async getCategories(req, res) {
        try {
            let categories = await this.categoryRepository.getAll(req.paginationOptions);
            res.status(200).json(Mapper.mapDatabaseModelsToIdentifierBusinessModels(categories, this.categoryRepository.tableName));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getProviders(req, res) {
        try {
            let providers = await this.providerRepository.getAll(req.paginationOptions);
            res.status(200).json(Mapper.mapDatabaseModelsToIdentifierBusinessModels(providers, this.providerRepository.tableName));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
