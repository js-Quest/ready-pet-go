// const express = require("express");
// const router = express.Router();
// const authControllers = require("../controllers/auth/authController");

// // trying out joi validation npm package
// const Joi = require("joi");
// const validator = require("express-joi-validation").createValidator({});
// const auth = require('../middleware/auth')

// const registerSchema = Joi.object({
//   username: Joi.string().min(3).max(12).required(),
//   password: Joi.string().min(6).max(12).required(),
//   email: Joi.string().email().required(),
// });

// const loginSchema = Joi.object({
//   password: Joi.string().min(6).max(12).required(),
//   email: Joi.string().email().required(),
// });

// router.post(
//   "/register",
//   validator.body(registerSchema),
//   authControllers.controllers.postRegister
// );
// router.post(
//   "/login",
//   validator.body(loginSchema),
//   authControllers.controllers.postLogin
// );

// //test route to verify middleware auth is working
// router.get('/test', auth, (req,res) =>{
//   res.send('request passed');
// });

// module.exports = router;
