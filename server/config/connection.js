const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB


mongoose.connect(
  process.env.MONGO_URI ||
    "mongodb://localhost:27017/chatAppDB",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export connection
module.exports = mongoose.connection;