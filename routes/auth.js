const { Router } = require('express');
const ValidateUser = require('../middleware/validateUser');
const UserController = require('../controllers/userController');

const authRoute = Router();

authRoute.post(
  '/signup',
  ValidateUser.validateProfileDetails,
  UserController.createUser,
);

authRoute.post(
  '/signin',
  ValidateUser.validateLoginDetails,
  UserController.login,
);

module.exports = authRoute;
