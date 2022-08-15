const bcrypt = require("bcryptjs");
const User = require("../model/User"); // User model
const Joi = require('@hapi/joi');
const { registerSchema, loginSchema } = require('../utils/userValidation');
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "thisIs@$ecretKey"

const getAllUser = async (req,res,next) =>{
  let users;
  try {
      users = await User.find();
  } catch (e) {
      return res.status(400).json({
          success : false,
          response : {
              message : e
          }
      })
  }
  if (!users) {
      return res.status(404).json({
          success: false,
          response: {
              message: "users not found",
          },
      });
  }
  return res.status(200).json({ success: true , users });
}

const addNewUser = async (req,res,next) =>{
  let user;
  const {
    Email, 
    Password ,
    UserType ,
  } = req.body

  try {
    let existingUser = await User.findOne({ Email : Email })
    if(existingUser)
    return res.status(400).json({
      success : false,
      message : "User Already exists"
    })
    else
    {
      const user = new User({
        Email, 
        Password ,
        UserType ,
        UserId
      })
    }

  } catch (error) {
    return res.status(400).json({
      success : false,
      response : {
          message : e
      }
  })
  }

}

const loginUser = async (req,res,next) =>{
  const { Email, Password } = req.body;
  let existingUser;
  console.log(req.cookies);
  try{
    existingUser = await User.findOne({Email})
   }catch(e){
    console.log(err);
   }
   if(!existingUser){
       return res.status(404).json({message : "User is not found"})
   }

   const isPasswordCorrect = bcrypt.compareSync(Password,existingUser.Password);

   if(!isPasswordCorrect){
       return res.status(400).json({message: "Incorrect Password!"});
   }
  //  const authToken = jwt.sign(existingUser.toJSON(),JWT_SECRET);

   res.cookie("authToken" , authToken , {
    expire: new Date(Date.now() + 25892000000),
    httpOnly:true
   })
   return res.status(200).json({userType: existingUser.UserType , authToken});
    
  
}

module.exports = { getAllUser , loginUser }
