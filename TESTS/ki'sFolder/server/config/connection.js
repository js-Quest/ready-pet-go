const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rxs291:Never5660217!@classactivities.myu493z.mongodb.net/chatAppDB');

module.exports = mongoose.connection;
