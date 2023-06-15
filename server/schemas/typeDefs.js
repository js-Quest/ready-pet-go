const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    slug: String
    category: String
    image: String
    price: Float
    countInStock: Float
    brand: String
    rating: Float
    numReviews: Float
    description: String
  }

  type User {
    _id: ID
    username: String
    email: String
    phoneNumber: String
    city: String
    bio: String
    pets: [Pet]!
  }

  type Pet {
    _id: ID
    name: String
    age: String
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
    addPet(name: String, breed: String, age: String, bio: String): Pet
    updatePet(
      id: ID!
      name: String
      breed: String
      age: String
      bio: String
    ): Pet
    removePet(petId: ID!): Pet
    updateUser(
      username: String
      email: String
      phoneNumber: String
      bio: String
      city: String
    ): User
  }
`;

module.exports = typeDefs;
