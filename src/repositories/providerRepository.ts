import { BaseRepository } from "./baseRepository";

const TABLE_NAME = 'provider';
const DEFAULT_MAX_NUMBER_OF_PROVIDER_FOR_RETRIEVE_QUERY = 3;

export class ProviderRepository extends BaseRepository {
    constructor() {
        super(TABLE_NAME, DEFAULT_MAX_NUMBER_OF_PROVIDER_FOR_RETRIEVE_QUERY);
    }
}
