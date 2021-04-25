import { IPaginationOptions } from "../interfaces";

export function paginate() {
    return async (req, res, next) => {
        req.paginationOptions = <IPaginationOptions> {
            skip: req.query.page ? req.query.page - 1 : 0,
            numberOfItemsPerPage: req.query.limit
        };
        next();
    }
}
