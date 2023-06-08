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
`;

module.exports = typeDefs;
