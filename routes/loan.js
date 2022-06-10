const { Router } = require('express');
const validateParameters = require('../middleware/validateParameters');
const AuthenticateUser = require('../middleware/authenticateUser');
const ValidateLoan = require('../middleware/validateLoan');
const LoanController = require('../controllers/loanController');
const ValidateRepayment = require('../middleware/validateRepayment');
const RepaymentController = require('../controllers/repaymentController');

const loanRouter = Router();

loanRouter.post(
  '/loans',
  AuthenticateUser.verifyUser,
  ValidateLoan.validateLoanApply,
  LoanController.createLoan,
);
loanRouter.post(
  '/loans/:id/repayment',
  validateParameters.validateUUID,
  ValidateRepayment.validateRepayBody,
  AuthenticateUser.verifyAdmin,
  ValidateRepayment.validateRepayCredentials,
  RepaymentController.postRepayment,
);

loanRouter.get(
  '/loans',
  ValidateLoan.validateQueryOptions,
  AuthenticateUser.verifyAdmin,
  LoanController.getAllLoans,
);
loanRouter.get(
  '/loans/:id',
  validateParameters.validateUUID,
  AuthenticateUser.verifyAdmin,
  LoanController.getOneLoan,
);
loanRouter.get(
  '/loans/:id/repayments',
  AuthenticateUser.verifyUser,
  validateParameters.validateUUID,
  RepaymentController.viewRepaymentHistory,
);

loanRouter.patch(
  '/loans/:id',
  AuthenticateUser.verifyAdmin,
  validateParameters.validateUUID,
  validateParameters.validatePatchOptions,
  LoanController.updateLoan,
);

module.exports = loanRouter;
