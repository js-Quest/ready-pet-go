const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://SunnyOh:finn@practice.wchmv4y.mongodb.net/chatAppDB', 

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

// Export connection
module.exports = mongoose.connection;