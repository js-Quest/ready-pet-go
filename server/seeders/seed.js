const db = require('../config/connection');
const { Product, User, Pet } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const petSeeds = require('./petSeeds.json');

db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await Product.create(productSeeds);

    await User.deleteMany({});
    await User.create(userSeeds);

    await Pet.deleteMany({});
    await Pet.create(petSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
