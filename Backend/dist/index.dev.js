"use strict";

var express = require("express");

require("./config/db");

var cookieParser = require("cookie-parser");

var bodyParser = require("body-parser");

var cors = require('cors');

var session = require("express-session"); //import all rounter


var roadmapRoute = require("./routes/roadmap-routes");

var projectRoute = require("./routes/projectRoute");

var mentorRoute = require("./routes/mentorRoutes");

var userRoute = require("./routes/userRoutes");

var collgeRoute = require("./routes/collegeRoutes");

var departmentRoute = require("./routes/departmentRoute");

var SubjectRoute = require("./routes/subjectRoute");

var ProfessorRoute = require("./routes/professorRoute");

var StudentRoute = require("./routes/studentRoute");

var universityRoute = require("./routes/universityRoute");

var uploadRoute = require("./controller/uploadProfileController");

var recomRoute = require("./routes/recRoute");

var uploadProjectRoute = require("./routes/uploadProjectRoute"); //create the app


var app = express();
app.set("view engine", "ejs");
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(session({
  key: "userId",
  secret: "subscribe",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24
  }
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send({
    key: "hello bvmites!"
  });
});
app.use('/api/project', projectRoute);
app.use('/api/roadmap', roadmapRoute);
app.use('/api/mentor', mentorRoute);
app.use('/api/user', userRoute);
app.use('/api/college', collgeRoute);
app.use('/api/department', departmentRoute);
app.use('/api/subject', SubjectRoute);
app.use('/api/professor', ProfessorRoute);
app.use('/api/student', StudentRoute);
app.use('/api/university', universityRoute);
app.use('/collegeprofile', uploadRoute);
app.use('/api/projectupload', uploadProjectRoute); //upload project route

app.use('/api/recommendedProject', recomRoute); //define port

app.listen(5000, function () {
  return console.log("app started at 5000...");
});