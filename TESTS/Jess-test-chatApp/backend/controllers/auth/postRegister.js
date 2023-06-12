const User = require('../../models/Users');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const postRegister = async (req,res)=>{
  try{
    const { username, email, password } = req.body;
    const userExists = await User.exists({email});
    if (userExists){
      return res.status(500).json({ message: 'username or email already in use, please try again'});
    }
    //password encryption
    const encryptedPassword = await bcrypt.hash(password, 10);
    //create user and save in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword
    });
    //create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email
      },
      process.env.TOKEN_KEY, 
      {
        expiresIn: '24h'
      }
    );

    res.status(200).json({
      userData: {
        email: user.email,
        token: token,
        username: user.username,
      }
    })
  }catch(err){
    console.log(err);
    res.status(500).json({message: 'username or email already in use, please try again'})
  }
};

module.exports = postRegister;
