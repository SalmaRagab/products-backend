import * as dotenv from "dotenv";
import * as nodepath from "path";

const basedir = nodepath.dirname(require.main.filename || process.mainModule.filename);
let path = `${basedir}/../.env.development`;
dotenv.config({ path });

export const SERVICE_PORT = process.env.SERVICE_PORT || 3000;
export const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
export const DATABASE_NAME = process.env.DATABASE_NAME || 'task_database';
export const DATABASE_USER = process.env.DATABASE_USER || 'root';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'root';
