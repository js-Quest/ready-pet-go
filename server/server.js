const express = require("express");
const cors = require("cors");
const path = require('path');
require('dotenv').config()
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const socketServer = require('./socketServer');

const PORT = process.env.PORT  || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

socketServer.registerSocketServer(server)

// Serve static files from the 'build' directory inside the 'client' folder
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../client/build')));
}



// Route all other requests to the React app's 'index.html' file
app.get('/', (req, res) => {
  // res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
  res.sendFile(path.join(__dirname, '../client/'));
});
 
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };




  startApolloServer(typeDefs, resolvers);