const { Schema, model } = require('mongoose');

// creating product schema
const productSchema = new Schema(
  {
    product: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'category'
      },
    ],
  }
)

const Product = model('product', productSchema);

module.exports = Product;