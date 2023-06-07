const { Schema, model } = require('mongoose');

// creating category schema
const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'product'
      },
    ],
  }
);

const Category = model('category', categorySchema);

module.exports = Category;