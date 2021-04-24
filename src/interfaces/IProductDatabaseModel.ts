export interface IProductDatabaseModel {
    productId: number;
    productName: string;
    imageURI: string;
    featured: boolean;
    categoryId: number;
    categoryName: string;
    parentCategoryId: number;
    price: number;
    available: boolean;
    providerId: number;
    providerName: string;
}
