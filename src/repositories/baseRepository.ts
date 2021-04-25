import { DatabaseConnection } from "../database/database.connection";
import { IPaginationOptions } from "../interfaces";

export abstract class BaseRepository {
    public database: DatabaseConnection;
    public tableName: string;
    protected maxNumberOfItemsInRetrieveRequest: number;

    constructor(tableName: string, maxNumberOfItemsInRetrieveRequest?: number) {
        this.database = DatabaseConnection.getInstance();
        this.tableName = tableName;
        this.maxNumberOfItemsInRetrieveRequest = maxNumberOfItemsInRetrieveRequest;
    }

    public async getAll(paginationOptions: IPaginationOptions, filterOptions?): Promise<any[]> {
        try {
            const limit = paginationOptions.numberOfItemsPerPage || this.maxNumberOfItemsInRetrieveRequest;
            const query = `
                SELECT *
                FROM ${this.tableName}
                LIMIT ${limit}
                OFFSET ${paginationOptions.skip * limit}
            `;
            return <Promise<any[]>>this.executeQuery(query);
        } catch (error) {
            
        }
    }

    public async executeQuery(queryToExecute) {
        try {
            let executeQueryPromise = new Promise((resolve, reject) => {
                let query = queryToExecute;
                this.database.connection.query(query, function (err, result) {
                    if (err) throw err;
                    resolve(result);
                });
            });
            return executeQueryPromise.then((val) => {
                return val;
            });
        } catch (error) {
            throw new Error("Couldn't execute the SQL query");
        }
    }
}
