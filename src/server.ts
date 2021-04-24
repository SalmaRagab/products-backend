import express from "express";
import * as env from "./environment";
import { Service } from './service';
import { paginate } from "./middlewares/paginationMiddleware";
import { validateParams } from "./middlewares/inputValidationMiddlewares";

const app = express()
const port = env.SERVICE_PORT;

const service = new Service();

app.get('/', (req, res) => {
    res.send('Products service is up and running')
});

app.get('/products', validateParams([
    {
        in: 'query',
        paramKey: 'categoryId',
        required: true,
        type: 'int',
    },
    {
        in: 'query',
        paramKey: 'page',
        required: false,
        type: 'int',
    }
]), paginate(), function (req, res) {
    service.getProducts(req, res);
});


app.patch('/featured/:id', validateParams([
    {
        in: 'params',
        paramKey: 'id',
        required: true,
        type: 'int',
    }]) , async (req, res) => {
    service.toggleFeaturedProduct(req, res);
});

app.listen(port, () => {
    console.log(`Products service is listening at http://localhost:${port}`)
});
