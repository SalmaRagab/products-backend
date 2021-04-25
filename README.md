# Products backend

Prerequisites:
- For the project:
    - Navigate to the root folder of the project and install the dependencies using `npm install`
    - Add `.env.development` file in the *src* folder, it should look like the `.env.sample` file already available to specify the port, database credentials and database name. make sure to change the database name
        - If the name of the database is changed in the `.env.development` file, it needs to be changed in the sql queries file too, because it uses the default name
- For the database:
    - Run the sql queries that are in [this file](https://github.com/SalmaRagab/products-backend-task/blob/4032335feda27db6042bbc1d2ab8bbed838e3c33/src/database/database.queries.sql) for mysql to create the database and insert some dummy data into it
---
How to run?
- To start the server use `npm start`
- To check the API documentation, navigate to (http://localhost:3000/docs)
- In the folder `docs/postmanCollection`, there's an attached postman collection in order to test the endpoints, but requests can also be sent from the swagger documentation
---
The flow of the project:
- Starting the project will run the `server` file, which will initiate the `service` file
- Calling each endpoint will pass by the middlewares, depending on the endpoint, then will call the corresponding function from the `service`
    - Middlewares used:
        - `paginate` is used to add pagination object to the request in order to be used afterwards
            - The paginate middleware works with page and limit from the query parameters and they're both optional
            - If the page parameter isn't specified, it acts as page 1
            - If the limit parameter isn't specified, the default number (*available in the repository file for each table*) is used instead
        - `validateParams` is used to validate the parameters from the requests against the expected parameters. This middleware is responsible for sending the 400 status code in the response as an indication of a bad request, for example missing parameters or different types
- The `service` then calls the `repository` in order to perform the database action needed
