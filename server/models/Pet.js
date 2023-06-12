// const { Schema, Types } = require('mongoose');

// // creating pet schema
// const petSchema = new Schema(
//   {
//     petId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     petType: String,
//     name: String,
//     age: Number,
//     breed: String,
//     bio: {
//       type: String,
//       maxLength: 200,
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
// )

// module.exports = petSchema;