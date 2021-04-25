import { ICategory } from "./ICategory";
import { IProductProvider } from "./IProductProvider";
import { IIdentifier } from "./IIdentifier";

export interface IProduct extends IIdentifier {
    imageURI: string;
    featured: boolean;
    category: ICategory;
    productProviders: IProductProvider[];
}