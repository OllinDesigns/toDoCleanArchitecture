# toDoCleanArchitecture

- Node.js Project

This project is a ToDo List application built using Node.js. It is made following the principles of hexagonal architecture and vertical slicing. It provides an interface for managing tasks. The application files are located  in domain, application and infrastructure layers, depending on their functionality. The app connects to MongoDB.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command:

   ```bash
   npm install

3. Build the application using TypeScript by running:

   ```bash
   npm run build

4. To start the application, in the root folder type:

   ```bash
   npm start

You should see the messages "Gurrus is using express and sleeping in port 3000" and "Gurrus says hello from MongoDB." if the application is initialized correctly.

5. Open your web browser and visit http://localhost:3000/tasks to access the MongoDB collection.

## MongoDb

The file src/infrastructure/db.ts is responsible for the connection settings to the database. It uses an .env file to protect the connection string of every user. It works as follows:

### set up .env

Create a file .env in the root directory. The contens should be only this.

MONGO_CONNECTION_STRING=mongodb+srv://(yourMongoDBAtlasUserName):(yourMongoDbAtlasPassword).1b2ylxi.mongodb.net/(nameOfYourCollection)?retryWrites=true&w=majority.

Replace yourMongoDBAtlasUserName with your MongoDB Atlas user name, delete the parenthesis.

Replace yourMongoDbAtlasPassword with your MongoDB Atlas password, delete the parenthesis.

Replace nameOfYourCollection with the name you want to give to this collection. This is very important to locate and handle your connection in Atlas. Delete the parenthesis.

You can do this by going into your Atlas User home page. Then choose a Cluster. Then click on Connect (beside the chosen cluster). Then choose Connect to your application, Driver: Node.js. MongoDB proposes a connection string that should be modified with the things mentioned above.

If everything works correctly, you will see your chosen collection name under your chosen Cluster when you click "Browse collections". 

## Routes

The routes are defined under src/infrastructure/routes.

1: http://localhost:3000/tasks : route to the collection "toDolistCA". This is my chosen name for my MongoDB colection. It handles a GET HTTP request.

2: http://localhost:3000/posts/tasks : route for making a POST HTTP request in Postman.

3: http://localhost:3000/tasks/giveIdOfAnExistingTask : route for handling HTTP put request. Replace giveIdOfAnExistingTask with the id of an exisiting task. Must be an Id generated by MongoDb.

4: http://localhost:3000/tasks/giveIdOfAnExistingTask : Route for handling a DELETE HTTP request. Replace giveIdOfAnExistingTask with the id of an exisiting task.

## Postman
This project is tested with Postman. Here a link to test the HTTP requests of my project.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/28879225-513d6f15-4432-40e5-a301-6fae55009350?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D28879225-513d6f15-4432-40e5-a301-6fae55009350%26entityType%3Dcollection%26workspaceId%3Dbd377f3c-3039-46e6-950b-a0a6cf871bf7)


<!-- ## Key Components

    - ITask.ts: 

    - src/application/ports/TaskRepositoryPort.ts:  -->


## Dependencies and Development Dependencies

Check my [Title](package.json)
<!-- The project uses the following dependencies:

    express: A fast, unopinionated, minimalist web framework for Node.js.

    mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment.

    body-parser: A middleware to parse incoming request bodies in a middleware before the handlers. -->

## Testing

To run the tests, use the following command:

    npm test

The tests are written using Jest and are located in the __tests__ directory.

## scripts

- npm run dev # run the "dev" package script

- npm run tsc: Trnaspiles Typescript files into JavaScript files. this happens in the folder src/dist.

- npm test: run jest test


## Contribution

to this project are welcome! If you find any issues or want to add new features, feel free to create a pull request or submit an issue.

Happy ToDoListing! 🚀

