const { Product, User, Pet } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // query all products
    products: async () => {
      return await Product.find({});
    },

    //query all users
    users: async () => {
      return User.find().populate('pets')
    },

    //query one user
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('pets')
    },

    // query all pets
    pets: async () => {
      return Pet.find();
    },
    // query loggedin-in user and associated pet data
    me: async (parent, args, context) => {
      // check if users exist
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).
          populate('pets').select(
            '-__v -password'
          );
        return userData;
      }
      throw new AuthenticationError('Not logged in.');
    },
  },

  Mutation: {
    // login mutation
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // add user mutation
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args , context) => {

      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
          ...args 
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
    addPet: async (parent, { name,
      breed, age, bio }, context) => {
      if (context.user) {
        const pet = await Pet.create({
          name, breed, age, bio,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { pets: pet._id } }
        );

        return pet;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // update pet mutation
    updatePet: async (parent, { id, name,
      breed, age, bio }) => {
      return await Pet.findOneAndUpdate(
        { _id: id },
        { name, breed, age, bio },
        // Return the newly updated object instead of the original
        { new: true }
      )
    },

    // remove pet mutation
    removePet: async (parent, { petId }, context) => {
      if (context.user) {

        const pet = await Pet.findOneAndDelete({
          _id: petId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { pets: pet._id } }
        );
        return pet;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
