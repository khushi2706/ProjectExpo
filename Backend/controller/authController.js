const bcrypt = require("bcryptjs");
const User = require("../model/User"); // User model
const Joi = require('@hapi/joi');
const { registerSchema, loginSchema } = require('../utils/userValidation');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisIs@$ecretKey"

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

const loginUser = async (req,res,next) =>{
  res.set('Access-Control-Allow-Origin', '*');
  const { Email, Password } = req.body;
  let existingUser;
  try{
    existingUser = await User.findOne({Email})
   }catch(e){
    return res.status(404).json({message : "User is not found",e})
   }
   const isPasswordCorrect = bcrypt.compareSync(Password,existingUser.Password);

   if(!isPasswordCorrect){
       return res.status(400).json({message: "Incorrect Password!"});
   }
  const authToken = jwt.sign(existingUser.toJSON(),JWT_SECRET);

   
   return res.status(200).json({userType: existingUser.UserType , authToken , userId : existingUser._id});
    
  
}

module.exports = { getAllUser, loginUser, addNewUser };
