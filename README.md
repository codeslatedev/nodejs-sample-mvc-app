# nodejs-sample-mvc-app
This is a simple NodeJS MVC application without using any ORM.


A. Create a database then create a table using the below query:

CREATE TABLE users (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100),
	contact VARCHAR(15),
	active VARCHAR(1) DEFAULT('Y')
)


B. Steps to set up the project:
1. Clone the project in your local PC or server.
2. Make Sure you change the database configuration in config/db.js file.
3. In the root project directory using cmd run: 'npm install'.
4. To start the app, in cmd run: 'node server'.


5. In your web browser go to: 
    a. View all users: http://localhost:3000/user/fetch-all 
    
    b. Add user: http://localhost:3000/user/add
