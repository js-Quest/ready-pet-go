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
  }
  
   type Pet {
    _id: ID
    name: String
    age: Int
    breed: String
    bio: String
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
    pets: [Pet]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(name: String, breed: String, age: Int, bio: String): Pet 
  }



`

module.exports = typeDefs;
