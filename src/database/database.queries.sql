/**
Create the database
*/

CREATE DATABASE task_database;
USE task_database;

/**
Create the tables
*/
CREATE TABLE category (
    categoryId INT PRIMARY KEY,
    categoryName VARCHAR(45),
    parentCategoryId INT
);

ALTER TABLE category ADD CONSTRAINT fk_category 
    FOREIGN KEY (parentCategoryId) REFERENCES category(categoryId);
    
CREATE TABLE product (
    productId INT PRIMARY KEY,
    productName VARCHAR(45),
    imageURI VARCHAR(255),
    featured BOOLEAN default 0,
    categoryId INT,
	FOREIGN KEY (categoryId) REFERENCES category(categoryId)
);

CREATE TABLE provider (
    providerId INT PRIMARY KEY,
    providerName VARCHAR(45)
);


CREATE TABLE product_provider (
    productProviderId INT NOT NULL AUTO_INCREMENT UNIQUE,
    productId INT,
    providerId INT,
    price DOUBLE,
    available BOOLEAN,
    PRIMARY KEY (productId, providerId),
	FOREIGN KEY (productId) REFERENCES product(productId),
	FOREIGN KEY (providerId) REFERENCES provider(providerId) 
);


/**
Insert dummy data
*/
INSERT INTO 
	category(categoryId, categoryName, parentCategoryId)
VALUES
	(1,'Category 1',null),
	(2,'Category 2',null),
    (3,'Category 3',null),
    (4,'Category 4',1),
    (5,'Category 5',null),
    (6,'Category 6',2),
    (7,'Category 7',3);
   

INSERT INTO 
	product(productId, productName, imageURI, categoryId)
VALUES
	(1,'Product 1', 'https://picsum.photos/seed/picsum/200/300', 1),
	(2,'Product 2', 'https://picsum.photos/seed/picsum/200/300', 5),
    (3,'Product 3', 'https://picsum.photos/seed/picsum/200/300', 7),
    (4,'Product 4', 'https://picsum.photos/seed/picsum/200/300', 2),
    (5,'Product 5', 'https://picsum.photos/seed/picsum/200/300', 1),
    (6,'Product 6', 'https://picsum.photos/seed/picsum/200/300', 1),
	(7,'Product 7', 'https://picsum.photos/seed/picsum/200/300', 5),
    (8,'Product 8', 'https://picsum.photos/seed/picsum/200/300', 3),
    (9,'Product 9', 'https://picsum.photos/seed/picsum/200/300', 4),
    (10,'Product 10', 'https://picsum.photos/seed/picsum/200/300', 1),
    (11,'Product 11', 'https://picsum.photos/seed/picsum/200/300', 1),
	(12,'Product 12', 'https://picsum.photos/seed/picsum/200/300', 5),
    (13,'Product 13', 'https://picsum.photos/seed/picsum/200/300', 3),
    (14,'Product 14', 'https://picsum.photos/seed/picsum/200/300', 4),
    (15,'Product 15', 'https://picsum.photos/seed/picsum/200/300', 7),
    (16,'Product 16', 'https://picsum.photos/seed/picsum/200/300', 6),
	(17,'Product 17', 'https://picsum.photos/seed/picsum/200/300', 5),
    (18,'Product 18', 'https://picsum.photos/seed/picsum/200/300', 3),
    (19,'Product 19', 'https://picsum.photos/seed/picsum/200/300', 4),
    (20,'Product 20', 'https://picsum.photos/seed/picsum/200/300', 1),
    (21,'Product 21', 'https://picsum.photos/seed/picsum/200/300', 1),
	(22,'Product 22', 'https://picsum.photos/seed/picsum/200/300', 1),
    (23,'Product 23', 'https://picsum.photos/seed/picsum/200/300', 6),
    (24,'Product 24', 'https://picsum.photos/seed/picsum/200/300', 1),
    (25,'Product 25', 'https://picsum.photos/seed/picsum/200/300', 1),
    (26,'Product 26', 'https://picsum.photos/seed/picsum/200/300', 1),
	(27,'Product 27', 'https://picsum.photos/seed/picsum/200/300', 1),
    (28,'Product 28', 'https://picsum.photos/seed/picsum/200/300', 1),
    (29,'Product 29', 'https://picsum.photos/seed/picsum/200/300', 1),
    (30,'Product 30', 'https://picsum.photos/seed/picsum/200/300', 1),
    (31,'Product 31', 'https://picsum.photos/seed/picsum/200/300', 1),
	(32,'Product 32', 'https://picsum.photos/seed/picsum/200/300', 1),
    (33,'Product 33', 'https://picsum.photos/seed/picsum/200/300', 6),
    (34,'Product 34', 'https://picsum.photos/seed/picsum/200/300', 1),
    (35,'Product 35', 'https://picsum.photos/seed/picsum/200/300', 1),
    (36,'Product 36', 'https://picsum.photos/seed/picsum/200/300', 1),
	(37,'Product 37', 'https://picsum.photos/seed/picsum/200/300', 1),
    (38,'Product 38', 'https://picsum.photos/seed/picsum/200/300', 1),
    (39,'Product 39', 'https://picsum.photos/seed/picsum/200/300', 1),
    (40,'Product 40', 'https://picsum.photos/seed/picsum/200/300', 1),
    (41,'Product 41', 'https://picsum.photos/seed/picsum/200/300', 1),
	(42,'Product 42', 'https://picsum.photos/seed/picsum/200/300', 1),
    (43,'Product 43', 'https://picsum.photos/seed/picsum/200/300', 1),
    (44,'Product 44', 'https://picsum.photos/seed/picsum/200/300', 1),
    (45,'Product 45', 'https://picsum.photos/seed/picsum/200/300', 1),
    (46,'Product 46', 'https://picsum.photos/seed/picsum/200/300', 1),
	(47,'Product 47', 'https://picsum.photos/seed/picsum/200/300', 1),
    (48,'Product 48', 'https://picsum.photos/seed/picsum/200/300', 1),
    (49,'Product 49', 'https://picsum.photos/seed/picsum/200/300', 1),
    (50,'Product 50', 'https://picsum.photos/seed/picsum/200/300', 1);
    
INSERT INTO 
	provider(providerId, providerName)
VALUES
	(1,'Provider 1'),
	(2,'Provider 2'),
    (3,'Provider 3'),
    (4,'Provider 4'),
    (5,'Provider 5');
    
INSERT INTO 
	product_provider(productProviderId, productId, providerId, price, available)
VALUES
	(1, 1, 2, 15, true),
	(2, 1, 3, 10, true),
    (3, 2, 5, 51.4, true),
    (4, 2, 1, 50, false),
    (5, 3, 2, 15, true),
    (6, 11, 2, 115, true),
	(7, 13, 3, 110, true),
    (8, 20, 5, 51.4, true),
    (9, 11, 1, 100, false),
    (10, 17, 4, 15, true);