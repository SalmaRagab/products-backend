import { DatabaseConnection } from "../database/database.connection";

export abstract class BaseRepository {
    public database: DatabaseConnection;
    public tableName: string;

    constructor() {
        this.database = DatabaseConnection.getInstance();
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
