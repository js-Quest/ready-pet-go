const mongoose = require("mongoose");
<<<<<<< HEAD



// Wrap Mongoose around local connection to MongoDB


mongoose.connect(
  process.env.MONGO_URI || "mongodb+srv://rxs291:Never5660217!@classactivities.myu493z.mongodb.net/chatAppDB",

=======
// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://SunnyOh:finn@practice.wchmv4y.mongodb.net/chatAppDB',
>>>>>>> 2dbbc874037d6fb729a46bfddfdf48547d99af9c
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
// Export connection
module.exports = mongoose.connection;