This is the backend part of the user authentication system.

Features

Login API using POST request

JSON request handling

CORS enabled for frontend communication

API Endpoint

POST /login

Request:

{"username": "admin","password": "1234"}

Response:

{"message": "Login successful"}

How to Run

Install Node.js

Open project in VS Code

Run:npm install express cors

Start server:node index.js

Server runs on:http://localhost:3000

Testing

Backend tested in Replit environment

Note

This is a basic backend implementation without database or advanced security.
