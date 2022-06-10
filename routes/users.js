const { Router } = require('express');
const validateParameters = require('../middleware/validateParameters');
const AuthenticateUser = require('../middleware/authenticateUser');
const UserController = require('../controllers/userController');
const LoanController = require('../controllers/loanController');

const userRoute = Router();

userRoute.get(
  '/users',
  AuthenticateUser.verifyAdmin,
  UserController.getAllUsers,
);
userRoute.get(
  '/users/loans',
  AuthenticateUser.verifyUser,
  LoanController.viewUserLoans,
);
userRoute.patch(
  '/users/verify/:email',
  validateParameters.validateEmail,
  validateParameters.validateStatus,
  AuthenticateUser.verifyAdmin,
  UserController.verifyUser,
);
userRoute.get(
  '/users/:email',
  validateParameters.validateEmail,
  AuthenticateUser.verifyAdmin,
  UserController.getUser,
);

module.exports = userRoute;
