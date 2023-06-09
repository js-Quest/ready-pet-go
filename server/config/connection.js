const mongoose = require("mongoose");
require('dotenv').config();

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://jasaddington:Mongo@classactivities.xmp67mu.mongodb.net/chatAppDB?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(()=> console.log('@@@@@DATABASE connected@@@@@'));

// Export connection
module.exports = mongoose.connection;