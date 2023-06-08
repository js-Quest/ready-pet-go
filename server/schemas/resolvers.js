const { Product } = require('../models');

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find({});
    }
  }
};

module.exports = resolvers;
