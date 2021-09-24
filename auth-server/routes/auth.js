const { Router } = require('express');
const { check } = require('express-validator');
const { newUser, login, validateToken } = require('../controllers/auth.controller');
const { validateField } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-token');

const router = Router();

router.post( '/new', [
  check('email','Email is mandatory').isEmail(),
  check('name', 'Name is required').not().isEmpty().isLength(4),
  check('password','Password is mandatory').isLength(7),
  validateField
],newUser );

router.post( '/', [
  check('email','Email is mandatory').isEmail(),
  check('password','Password is mandatory').isLength(7),
  validateField
],login);

router.get( '/validate',[
  validateJWT
] ,validateToken);


module.exports = router;