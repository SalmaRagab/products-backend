import { IProvider } from "./IProvider";

export interface IProductProvider {
    provider: IProvider;
    price: number;
    available: boolean;
}
