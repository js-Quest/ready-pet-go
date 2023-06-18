const mongoose = require("mongoose"); 

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(
  process.env.MONGO_URI || "mongodb+srv://rxs291:Never5660217!@classactivities.myu493z.mongodb.net/chatAppDB",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
// Export connection
module.exports = mongoose.connection;