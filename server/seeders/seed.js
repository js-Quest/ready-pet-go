const db = require("../config/connection");
const { Product, User, Category } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeeds.json");

db.once("open", async () => {
  try {
    await Product.deleteMany({});
    await Category.deleteMany({});

    // Create categories
    await Category.insertMany([
      { name: "Dog Toy" },
      { name: "Cat Toy" },
      { name: "Cat Food" },
      { name: "Dog Food" },
      { name: "Pet Clothes" },
    ]);

    console.log("categories seeded");

    await Product.create(productSeeds);

    await User.deleteMany({});
    await User.create(userSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
