const { response } = require("express");
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next)=>{

  const token = req.header('x-token');

  if(!token){
    return res.status(401).json({
      ok:false,
      msg: 'error en token'
    })
  }

  try {
    console.log(jwt.verify(token,process.env.SECRET_JWT_SEED));
    const { uid } = jwt.verify(token,process.env.SECRET_JWT_SEED);
    req.uid = uid;

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok:false,
      msg: 'token invalido'
    })
  }

  next();
}


module.exports = {
  validateJWT
}