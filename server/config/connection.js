const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chatAppDB', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

// Export connection
module.exports = mongoose.connection;