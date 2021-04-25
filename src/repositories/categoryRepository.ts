import { BaseRepository } from "./baseRepository";

const TABLE_NAME = 'category';
const DEFAULT_MAX_NUMBER_OF_CATEGORIES_FOR_RETRIEVE_QUERY = 3;

export class CategoryRepository extends BaseRepository {
    constructor() {
        super(TABLE_NAME, DEFAULT_MAX_NUMBER_OF_CATEGORIES_FOR_RETRIEVE_QUERY);
    }
}