const { Product, User, Pet } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find({});
    },

    //query user
    users: async () => {
      return User.find().populate('pets')
    },

    //query one user
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    // query pets
    pets: async () => {
      return Pet.find();
    },

    me: async (parent, args, context) => {
      // check if users exist
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );
        return userData;
      }
      throw new AuthenticationError('Not logged in.');
    },
  },

  Mutation: {
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addPet: async (parent, { userId, name,
      breed, age, bio }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              pets: {
                name,
                breed,
                age,
                bio
              },
            },
          },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // removePet: async (parent, { userId, petId }, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: userId },
    //       {
    //         $pull: {
    //           pets: {
    //             _id: petId,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
