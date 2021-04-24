import { IProductDatabaseModel } from "../interfaces/IProductDatabaseModel";
import { IProduct } from "../interfaces/IProduct";

export class Mapper {

    constructor() {}

    public static mapProductsFromDatabaseModelToBusinessModel(productDatabaseModels: IProductDatabaseModel[]): IProduct[] {
        let products: IProduct[] = [];
        productDatabaseModels.forEach(productDatabaseModel => {
            products.push({
                id: productDatabaseModel.productId,
                name: productDatabaseModel.productName,
                imageURI: productDatabaseModel.imageURI,
                featured: !!productDatabaseModel.featured,
                category: {
                    id: productDatabaseModel.categoryId,
                    name: productDatabaseModel.categoryName
                },
                productProviders: productDatabaseModel.providerId ? [{
                    provider: {
                        id: productDatabaseModel.providerId,
                        name: productDatabaseModel.providerName,
                    },
                    price: productDatabaseModel.price,
                    available: !!productDatabaseModel.available
                }] : null,
            });
        });
        return products;
    }
}
