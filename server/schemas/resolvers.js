const { Product, User, Pet, MeetUp } = require('../models');
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
      return User.find().populate('pets').populate('meetUp')
    },

    //query one user
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('pets').populate('meetUp')
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
          populate('pets').populate('meetUp').select(
            '-__v -password'
          );
        return userData;
      }
      throw new AuthenticationError('Not logged in.');
    },
    meetUps: async (parent, { username }) => {
      const params = username ? { username } : {};
      return MeetUp.find(params).sort({ createdAt: -1 }).populate('user');
    },
    meetUp: async (parent, { meetUpId }) => {
      return MeetUp.findOne({ _id: meetUpId }).populate('user');
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
 
    addPet: async (parent, { profilePicture, name,
      breed, age, bio }, context) => {
      if (context.user) {
        const pet = await Pet.create({
          profilePicture, name, breed, age, bio,
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
    updatePet: async (parent, { id, profilePicture, name,
      breed, age, bio }) => {
      return await Pet.findOneAndUpdate(
        { _id: id },
        { profilePicture, name, breed, age, bio },
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
    addMeetUp: async (parent, { meetUpText, meetUpTitle }, context) => {
      if (context.user) {
        console.log(context)
        const meetUp = await MeetUp.create({
          meetUpText,
          meetUpTitle,
          meetUpAuthor: context.user.username,
          user: context.user._id
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { meetUp: meetUp._id } }
        );

        return meetUp;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { meetUpId, commentText }, context) => {
      if (context.user) {
        return MeetUp.findOneAndUpdate(
          { _id: meetUpId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMeetUp: async (parent, { meetUpId }, context) => {
      if (context.user) {
        const meetUp = await MeetUp.findOneAndDelete({
          _id: meetUpId,
          meetUpAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { meetUps: meetUp._id } }
        );

        return meetUp;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { meetUpId, commentId }, context) => {
      if (context.user) {
        return MeetUp.findOneAndUpdate(
          { _id: meetUpId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
};

module.exports = resolvers;
