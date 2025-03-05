# Blog_API
Intern test


# Blog_API
Intern test

***Project Overview***

This is a simple blog API built with Node.js, Express, and MongoDB. It allows users to register, log in, and perform CRUD operations on blog posts. Authentication is handled using JWT.

***Tech Stack***

Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication: JWT, bcrypt
Tools: Postman (for API testing), Git



Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add the following:

MONGODB_URL=mongodb+srv://<db name>:<password>@cluster1.xqwyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
JWT_SECRET=your_jwt_secret

4️⃣ Start the Server

npm start

The server will run on http://localhost:8078



****API Endpoints****

###User Authentication###
POST /api/register - Register a new user
POST /api/login - Login and receive a JWT token

###Blog Posts (Protected Routes)
GET /api/posts - Get all blog posts
GET /api/posts/:id - Get a specific blog post
POST /api/posts - Create a new blog post
PUT /api/posts/:id - Update a blog post
DELETE /api/posts/:id - Delete a blog post

**Note: All blog routes require a JWT token in the Authorization header.


 



****Error Handling***

Proper error messages are returned for invalid requests, missing fields, or unauthorized access.

 
 ***License***

This project is licensed under the MIT License.


