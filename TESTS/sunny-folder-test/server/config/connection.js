const mongoose = require("mongoose");
require('dotenv').config();

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGO_URI || '', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(()=> console.log('@@@@@DATABASE connected@@@@@'));

// Export connection
module.exports = mongoose.connection;