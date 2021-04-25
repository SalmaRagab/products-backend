import { IProductDatabaseModel, IPaginationOptions } from "../interfaces";
import { BaseRepository } from "./baseRepository";

const DEFAULT_MAX_NUMBER_OF_PRODUCTS_FOR_RETRIEVE_QUERY = 25;
const TABLE_NAME = 'product';

export class ProductRepository extends BaseRepository {

    constructor() {
        super(TABLE_NAME);
    }

    public async getAll(paginationOptions: IPaginationOptions, filterOptions?): Promise<IProductDatabaseModel[]> {
        try {
            const limit = paginationOptions.numberOfItemsPerPage || DEFAULT_MAX_NUMBER_OF_PRODUCTS_FOR_RETRIEVE_QUERY;
            const query = `
                SELECT
                    product.productId,
                    product.productName,
                    product.imageURI,
                    product.featured,
                    category.categoryId,
                    category.categoryName,
                    product_provider.price,
                    product_provider.available,
                    provider.providerId,
                    provider.providerName
                FROM
                    product
                        LEFT JOIN
                    category ON (category.categoryId = product.categoryId)
                        LEFT JOIN
                    product_provider ON (product_provider.productId = product.productId
                        AND product_provider.price = (SELECT 
                            MIN(price)
                        FROM
                            product_provider
                        WHERE
                            productId = product.productId))
                        LEFT JOIN
                    provider ON (product_provider.providerId = provider.providerId)
                WHERE
                    product.categoryId =  ${filterOptions.categoryId}
                ORDER BY product.productId
                LIMIT ${limit}
                OFFSET ${paginationOptions.skip * limit}
            `;
            return <Promise<IProductDatabaseModel[]>> this.executeQuery(query);
        } catch (error) {
            throw new Error("Couldn't get list of products");
        }
        
    }

    public async toggleFeaturedProduct(id: string): Promise<boolean> {
        try {
            const query = `
                UPDATE product
                    SET featured = 1 - featured
                WHERE productId = ${id}
            `    
            const updateFeaturedQueryStatus = <{ changedRows: number }> await this.executeQuery(query);
            if (updateFeaturedQueryStatus.changedRows > 0) return true;
            return false;
        } catch (error) {
            throw new Error("Couldn't toggle the featured status");
        }
    }
}
