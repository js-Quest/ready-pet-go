const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    product: String
    price: Int 
  }

  type Query {
    products: [Product]
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
