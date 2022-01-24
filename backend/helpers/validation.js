const { check, validationResult } = require("express-validator");

// Validation Check
const validationCheck = (req, res, next) => {
  const errors = validationResult(req).array();

  if (!errors.length) return next();

  res.status(400);
  throw new Error(errors[0].msg);
};

// Register Data Validation
const validateRegisterData = [
  check("name").trim().not().isEmpty().withMessage("Name is required!"),
  check("email").normalizeEmail().isEmail().withMessage("Invalid Email!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is required!")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long!"),
];

module.exports = { validationCheck, validateRegisterData };
