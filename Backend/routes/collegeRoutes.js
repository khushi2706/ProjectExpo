const express = require("express");
const router = express.Router();
const { getAllColleges, getCollegeById , addNewCollege , getCollegeByUserId , changeCollgeProfile} = require("../controller/collegeControllor");


router.get("/", getAllColleges);
router.get("/collegeId/:id",  getCollegeById);
router.get("/userId/:UserId",  getCollegeByUserId);
router.post("/addNew",  addNewCollege);
router.put("/changeProfile" , changeCollgeProfile);
module.exports = router;



