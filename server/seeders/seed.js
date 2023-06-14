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
    // for (let i = 0; i < petSeeds.length; i++) {
    //   const { _id, petOwner } = await Pet.create(petSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: petOwner },
    //     {
    //       $addToSet: {
    //         pets: _id,
    //       },
    //     }
    //   );
    // }
    // for each pet in pets array need to send back id to user

    await Pet.deleteMany({});
    await Pet.create(petSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
