import { IIdentifier } from "./IIdentifier";

export interface ICategory extends IIdentifier {
    parentCategory?: ICategory;
}
