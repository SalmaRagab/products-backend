const mysql = require('mysql');
import * as env from "../environment";

export class DatabaseConnection {
    private static instance: DatabaseConnection;
    public connection: any;
    private constructor() {
        const connection = mysql.createConnection({
            host: env.DATABASE_HOST,
            user: env.DATABASE_USER,
            password: env.DATABASE_PASSWORD,
            database: env.DATABASE_NAME
        });
        connection.connect((err: any) => {
            if (err) throw err;
            this.connection = connection;
            console.log('Database is connected!');
        });
    }

    public static getInstance() {
        if (!this.instance) this.instance = new DatabaseConnection();
        return this.instance;
    }
}
