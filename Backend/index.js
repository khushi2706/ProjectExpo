const express = require("express");
require("./config/db");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const cors = require('cors');
const session = require("express-session");
//import all rounter
const roadmapRoute = require("./routes/roadmap-routes");
const projectRoute = require("./routes/projectRoute");
const mentorRoute = require("./routes/mentorRoutes");
const userRoute = require("./routes/userRoutes");
const collgeRoute = require("./routes/collegeRoutes");
const departmentRoute = require("./routes/departmentRoute");
const SubjectRoute = require("./routes/subjectRoute");
const ProfessorRoute = require("./routes/professorRoute");
const StudentRoute = require("./routes/studentRoute");
const universityRoute = require("./routes/universityRoute");
const uploadRoute = require("./controller/uploadProfileController");
const uploadProjectRoute = require("./controller/uploadProjectController");
const recomRoute = require("./routes/recRoute");
//create the app
const app = express();

app.set("view engine","ejs");
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(
    session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ key: "hello bvmites!" });
});

app.use('/api/project', projectRoute);
app.use('/api/roadmap' , roadmapRoute);
app.use('/api/mentor' , mentorRoute);
app.use('/api/user' , userRoute);
app.use('/api/college',collgeRoute);
app.use('/api/department', departmentRoute);
app.use('/api/subject',SubjectRoute);
app.use('/api/professor', ProfessorRoute);
app.use('/api/student',StudentRoute);
app.use('/api/university',universityRoute);
app.use('/collegeprofile',uploadRoute);
app.use('/projectupload',uploadProjectRoute);
app.use('/api/recommendedProject',recomRoute);
//define port

app.listen(5000, () => console.log("app started at 5000..."));
