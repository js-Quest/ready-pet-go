const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://jasaddington:Mongo@classactivities.xmp67mu.mongodb.net/chatAppDB?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export connection
module.exports = mongoose.connection;