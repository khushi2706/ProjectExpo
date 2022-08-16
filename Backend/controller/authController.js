const bcrypt = require("bcryptjs");
const User = require("../model/User"); // User model
const Joi = require("@hapi/joi");
const { registerSchema, loginSchema } = require("../utils/userValidation");

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (e) {
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }
  if (!users) {
    return res.status(404).json({
      success: false,
      response: {
        message: "users not found",
      },
    });
  }
  return res.status(200).json({ success: true, users });
};

const getUserById = async (req, res, next) => {
  let userId = req.param.id;
  console.log(userId);
  let user = "";
  try {
    user = await User.find({ _id: userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exists",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: {
        message: error.message,
      },
    });
  }

  return res.status(200).json({ success: true, user });
};

const addNewUser = async (req, res, next) => {
  const { Email, Password, UserType } = req.body;
  console.log("API->Email: " + Email);
  try {
    let existingUser = await User.findOne({ Email: Email });
    console.log("we are inside the try block");
    if (existingUser)
      return res.status(400).json({
        success: false,
        message: "User Already exists",
      });
    else {
      console.log("We are about to create a new user");
      const user = new User({
        Email,
        Password,
        UserType,
        // UserId,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: {
        message: error.message,
      },
    });
  }
};

const loginUser = async (req, res, next) => {};

module.exports = { getAllUser, addNewUser, getUserById };
