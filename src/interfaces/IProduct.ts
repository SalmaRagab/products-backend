import { ICategory } from "./ICategory";
import { IProductProvider } from "./IProductProvider";

export interface IProduct {
    id: number;
    name: string;
    imageURI: string;
    featured: boolean;
    category: ICategory;
    productProviders: IProductProvider[];
}