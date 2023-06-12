const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user && (await bcrypt.compare(password, user.password))) {
      //send new token
      const token = jwt.sign(
        {
          userId: user._id,
          email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        userData: {
          email: user.email,
          token: token,
          username: user.username,
        },
      });
    }
    return res.status(400).json({ message: "invalid credentials, try again" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something wrong, bruh" });
  }
};

module.exports = postLogin;
