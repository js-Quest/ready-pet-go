const { Schema, model } = require('mongoose');

// creating pet schema
const petSchema = new Schema(
  {
    name: String,
    age: String,
    breed: String,
    bio: {
      type: String,
      maxLength: 200,
    }
  }
);

const Pet = model('pet', petSchema);

module.exports = Pet;