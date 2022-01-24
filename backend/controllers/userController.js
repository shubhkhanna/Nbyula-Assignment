const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const getJwtToken = require("../helpers/getJwtToken");
const getHashPassword = require("../helpers/getHashPassword");

// @desc Register a new user
// @route POST /v1/api/auth/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  // Get the user from the request body
  const { name, email, password, isTeacher } = req.body;

  // Check if the user already exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("Email already exists!");
  }

  // Create the user
  const newUser = await User.create({
    name,
    email,
    password: await getHashPassword(password),
    isTeacher,
  });

  // Sending response
  if (newUser) {
    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isTeacher: newUser.isTeacher,
        token: getJwtToken(newUser._id),
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid user data!");
  }
});

module.exports = { registerUser };
