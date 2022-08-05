const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, authChecker } = require("../controller/AuthController");
const { getAllColleges, getCollegeById, createCollege, updateCollege, deleteCollege } = require("../controller/CollegeController");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/colleges", authChecker, getAllColleges);
router.get("/colleges/:id", authChecker, getCollegeById);
router.post("/colleges", authChecker, createCollege);
router.put("/colleges/:id", authChecker, updateCollege);
router.delete("/colleges/:id", authChecker, deleteCollege);
router.get("/users", authChecker, getAllUsers);
router.get("/users/:id", authChecker, getUserById);
router.post("/users", authChecker, createUser);
router.put("/users/:id", authChecker, updateUser);
router.delete("/users/:id", authChecker, deleteUser);


module.exports = router;
// }


