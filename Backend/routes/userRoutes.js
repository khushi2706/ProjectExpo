const express = require("express");
const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  addNewUser,
  getAllUser,
  addNewFollower
} = require("../controller/AuthController");
const { registerLimiter, loginLimiter } = require("../utils/rateLimiter");

userRouter.get("/", getAllUser);
// userRouter.get("/getUserById/:id", getUserById);
userRouter.post("/register", addNewUser);

userRouter.get("/:id", getUserById);
// Registers a new User
//userRouter.post("/register", registerLimiter, registerUser);

// Logs In a User, creates session in mongo store
// and returns a cookie containing sessionID, also called "session-id"
userRouter.post("/login", loginLimiter, loginUser);
userRouter.post("/addNewFollow", addNewFollower);
// Log out user by deleting session from store
// and deleting cookie on client side
// Needs cookie containing sessionID to be attached to request
// userRouter.delete("/logout", logoutUser);
// userRouter.get("/getUserById/:id", getUserById);
// // Check if user is Authenticated by reading session data
// // Needs cookie containing sessionID
// userRouter.get("/authchecker", authChecker);

module.exports = userRouter;
