const express = require("express");
const { registerUser } = require("../controllers/userController");
const {
  validateRegisterData,
  validationCheck,
} = require("../helpers/validation");
const router = express.Router();

router
  .route("/register")
  .post(validateRegisterData, validationCheck, registerUser);

module.exports = router;
