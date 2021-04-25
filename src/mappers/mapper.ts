import { IIdentifier, IProduct, IProductDatabaseModel } from "../interfaces";

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

    public static mapDatabaseModelsToIdentifierBusinessModels(databaseModels, tableName: string): IIdentifier [] {
        let identifierModels: IIdentifier[];
        databaseModels.forEach(databaseModel => {
            identifierModels.push({
                id: databaseModel[`${tableName}Id`],
                name: databaseModel[`${tableName}Name`]
            });
        });
        return identifierModels;
    }
}
