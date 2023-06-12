const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    product: String
    price: Float 
  } 

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    me: User
    user: User
    users: [User]
    products: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }


`

module.exports = typeDefs;
