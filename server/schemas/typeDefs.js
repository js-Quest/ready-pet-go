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
    pets: [Pet]
    friends: [User]
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    users: [User]
    products: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(userId: ID!, name: String,breed: String, age: Number, bio: String, imageURL: String): User
    removePet(userId: ID!, petId: ID!): User
  }



`

module.exports = typeDefs;
