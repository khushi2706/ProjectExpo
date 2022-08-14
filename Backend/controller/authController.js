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

const addNewUser = async (req, res, next) => {
  let user;
  const { Email, Password, UserType } = req.body;

  try {
    let existingUser = await User.findOne({ Email: Email });
    if (existingUser)
      return res.status(400).json({
        success: false,
        message: "User Already exists",
      });
    else {
      const user = new User({
        Email,
        Password,
        UserType,
        UserId,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }
};

const loginUser = async (req, res, next) => {};

module.exports = { getAllUser };
