const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require('./routes/authRoutes.js');

const PORT = process.env.PORT || process.env.API_PORT;

//middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//register routes
app.use('/api/auth', authRoutes);


const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server listening on ${PORT}!!!!`);
    });
  })
  .catch((err) => {
    console.log("database connection failed, server not started");
    console.log(err);
  });
