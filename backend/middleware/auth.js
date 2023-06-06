const jwt = require('jsonwebtoken');
//web tokens!!!!!
const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['authorization'];

  if (!token) {
    return res.status(403).json({message: 'token required for authentication'});
  }
  try{
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY)
    req.user = decoded;
  }catch(err){
    res.status(401).json({message: 'invalid token'})
  }
  return next();
}

module.exports = verifyToken;