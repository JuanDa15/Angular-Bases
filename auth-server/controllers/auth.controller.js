const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const newUser = async( req, res = response) => {

    const {email,name,password} = req.body;

    try{

      // unique email
      const user = await User.findOne({email: email});

      if(user){
        return res.status(400).json({
          ok: false,
          msg: 'user already exist'
        })
      }
      
    // Create user with model
    const dbUser = new User(req.body);

    // password encrypt
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password,salt);


    // generate jwt
    const jwtUser = await generateJWT(dbUser.id,dbUser.name);

    // Create User

    await dbUser.save();

    // generate answer
    return res.status(200).json({
      ok: true,
      msg: 'godines',
      uid: dbUser.id,
      name: dbUser.name,
      jwtUser,
      email: dbUser.email,
    })

    }catch(error){
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: 'contact with your admin'
      })
    }
}

const login = async( req, res = response) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({email: email});

    if( !user ){
      return res.status(400).json({
        ok: false,
        msg: 'El correo no existe'
      })
    }else{

      // password confirm
      const validPassword = bcrypt.compareSync( password, user.password);

      if(!validPassword){
        return res.status(400).json({
          ok:false,
          msg: 'password not exist'
        })
      }else{
        const jwtUser = await generateJWT(user.id,user.name);

        return res.status(200).json({
          ok:true,
          msg: 'godines',
          jwtUser,
          name: user.name,
          email: user.email,
          uid: user._id
        })
      }

    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok:false,
      msg: 'xd no mas'
    })
  }

}

const validateToken = async( req, res = response) => {

  const { uid } = req;

  const dbUser = await User.findById(uid);

  let jwtToken = await generateJWT(uid,dbUser.name);

  return res.json({
    ok: true,
    msg: 'validate ',
    jwtUser: jwtToken,
    name: dbUser.name,
    uid: uid,
    email: dbUser.email
  })
}


module.exports = {
  newUser,
  login,
  validateToken
};