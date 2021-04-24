import { IProductDatabaseModel } from "../interfaces/IProductDatabaseModel";
import { IProductResponseModel } from "../interfaces/responseModels/IProductResponseModel";

export class Mapper {

    constructor() {}

    public static mapProductsFromDatabaseModelToBusinessModel(productDatabaseModels: IProductDatabaseModel[]): IProductResponseModel[] {
        let products: IProductResponseModel[] = [];
        productDatabaseModels.forEach(productDatabaseModel => {
            products.push({
                id: productDatabaseModel.productId,
                productName: productDatabaseModel.productName,
                imageURI: productDatabaseModel.imageURI,
                featured: !!productDatabaseModel.featured,
                category: {
                    id: productDatabaseModel.categoryId,
                    categoryName: productDatabaseModel.categoryName
                },
                productProvider: productDatabaseModel.providerId ? {
                    id: productDatabaseModel.providerId,
                    providerName: productDatabaseModel.providerName,
                    providedPrice: productDatabaseModel.price,
                    available: !!productDatabaseModel.available
                } : null,
            });
        });
        return products;
    }
}
