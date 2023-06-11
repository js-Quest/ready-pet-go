const { Schema, model } = require('mongoose');
// Requiring the Pet schema to include in the pet array below
const petSchema = require('./Pet')

// Schema to create User model
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (e) {
          return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e);
        },
        message: email => `${email.value} is not a valid email!`
      },
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 26
    },
    pets: [petSchema],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a virtual property `friendCount` that retrieves the length of the friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create a virtual property `petCount` that retrieves the length of the pet array field on query
userSchema.virtual('petCount').get(function () {
  return this.pets.length;
});

const User = model('user', userSchema);

module.exports = User;