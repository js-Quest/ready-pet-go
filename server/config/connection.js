const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(
  process.env.MONGO_URI ||
    "mongodb+srv://lorenagracex:1989@practice.htuojqk.mongodb.net/chatAppDB?retryWrites=true&w=majority"
);

// Export connection
module.exports = mongoose.connection;