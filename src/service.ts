import { ProductRepository } from "./repositories/productRepository";
import { Mapper } from "./mappers/mapper";
import { IProductDatabaseModel } from "./interfaces/IProductDatabaseModel";

export class Service {
    private productRepository: ProductRepository;
    
    constructor() {
        this.productRepository = new ProductRepository();
    }

    public async getProducts(req, res) {
        try {
            const categoryId = req.query.categoryId as string;
            let productDatabaseModels: IProductDatabaseModel[] = await this.productRepository.getAll(req.paginationOptions, { categoryId });
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
                res.status(200).json({ message: "featured status is toggled successfully" })
            } else {
                res.status(404).json({ message: `product with id: ${id} isn't found` })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
