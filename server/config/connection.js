const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB


mongoose.connect(
  process.env.MONGO_URI || "",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export connection
module.exports = mongoose.connection;