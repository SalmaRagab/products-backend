import { ICategory } from "./ICategory";
import { IProductProvider } from "./IProductProvider";

export interface IProduct {
    id: number;
    productName: string;
    imageURI: string;
    featured: boolean;
    category: ICategory;
    productProviders: IProductProvider[];
}