const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGO_URI || " ");

// Export connection
module.exports = mongoose.connection;