import express from "express";
import * as env from "./environment";
import { Service } from './service';
import { paginate } from "./middlewares/paginationMiddleware";
import { validateParams } from "./middlewares/inputValidationMiddlewares";
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import * as nodepath from "path";

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


app.patch('/toggleFeatured/:id', validateParams([
    {
        in: 'params',
        paramKey: 'id',
        required: true,
        type: 'int',
    }]) , async (req, res) => {
    service.toggleFeaturedProduct(req, res);
});

/**
    Define swagger
*/
const swaggerPath = nodepath.resolve(__dirname, './api.yml');
const swaggerDocument = yaml.load(swaggerPath);
const options = {
    swaggerOptions: {
        url: `http://localhost:${port}`
    }
}
app.use(
    '/docs/',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, options)
);

app.listen(port, () => {
    console.log(`Products service is listening at http://localhost:${port}`)
});
