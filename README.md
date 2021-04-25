# Products backend task

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
