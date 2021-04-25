# Products backend

Prerequisites:
- For the database:
    - Run the scripts that are in [this file](https://github.com/SalmaRagab/products-backend-task/blob/4032335feda27db6042bbc1d2ab8bbed838e3c33/src/database/database.queries.sql) for mysql to create the database and insert some dummy data into it
- For the project:
    - Navigate to the root folder of the project and install the dependencies using `npm install`
    - Add `.env.development` file in the *src* folder, it should look like the `.env.sample` file already available to specify the port, database credentials and database name

How to run?
- To start the server use `npm start`
- To check the API documentation, navigate to (http://localhost:3000/docs)
- In the folder `docs/postmanCollection`, there's an attached postman collection in order to test the endpoints, but requests can also be sent from the swagger documentation
---
Functional documentation:
- Starting the project will run the `server` file, which will initiate the `service` file
- Calling each endpoint will pass by the middlewares, depending on the endpoint, then will call the corresponding function from the `service`
    - Middlewares used:
        - `paginate` is used to add pagination object to the request in order to be used afterwards
        - `validateParams` is used to validate the parameters from the requests against the expected parameters. This middleware is responsible for sending the 400 status code in the response as an indication of a bad request, for example missing parameters or different types
- The `service` then calls the `repository` in order to perform the database action needed
