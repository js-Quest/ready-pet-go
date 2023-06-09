const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const mongoose = require("mongoose");
const path = require('path');
require("dotenv").config();
// const authRoutes = require('./routes/authRoutes.js');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const auth = require('./utils/auth');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || process.env.API_PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});

//middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());


// //register routes
// app.use('/api/auth', authRoutes);

 
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };


  startApolloServer();