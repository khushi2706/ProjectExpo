const express = require("express");
const mentorRoute = express.Router();

const { getAllMentor ,addNewMentor,getMentorById } = require("../controller/mentotController");

mentorRoute.get("/",getAllMentor);
mentorRoute.post("/add",addNewMentor);
mentorRoute.get("/view/:id",getMentorById);
module.exports = mentorRoute;