const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// Requiring the Pet schema to include in the pet array below
const petSchema = require('./Pet')

// Schema to create User model
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
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

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
  // return password === this.password;
};


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