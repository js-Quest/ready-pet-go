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
    profilePicture: String
    pets: [Pet]!
    meetUp: [MeetUp]!
  }

  type MeetUp {
    _id: ID
    meetUpText: String
    meetUpAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Pet {
    _id: ID
    profilePicture: String
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
    meetUps(username: String): [MeetUp]
    meetUp(meetUpId: ID!): MeetUp
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(profilePicture: String, name: String, breed: String, age: String, bio: String): Pet
    updatePet(id: ID!, profilePicture: String, name: String, breed: String, age: String, bio: String): Pet  
    removePet(petId: ID!): Pet 
    updateUser(username: String, email: String, phoneNumber: String, bio: String, city: String, profilePicture: String): User

    addMeetUp(meetUpText: String!): MeetUp
    addComment(meetUpId: ID!, commentText: String!): MeetUp
    removeMeetUp(meetUpId: ID!): MeetUp
    removeComment(meetUpId: ID!, commentId: ID!): MeetUp 
  }
`;

module.exports = typeDefs;
