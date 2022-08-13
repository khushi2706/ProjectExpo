import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Roadmap from "./Components/Roadmap/Roadmap";
import University from "./Components/University/University";
import ProjectMain from "./Components/Project/ProjectMain";
import Mentor from "./Components/Mentor/Mentor";
import MentorView from "./Components/Mentor/MentorView";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import ProjectView from "./Components/Project/ProjectView";
import RoadmapView from "./Components/Roadmap/RoadmapView";
import Profile from "./Components/Profile/Profile";
import Blog from "./Components/Blog/Blog";
import UniProfile from "./Components/UniversityProfile/UniProfile";
import UniSubject from "./Components/UniversityProfile/UniSubject";
import UniDept from "./Components/UniversityProfile/UniDept";
import EditImg from "./Components/UniversityProfile/EditImg";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/Signup" element={<Signup />} />
            <Route index path="/Login" element={<Login />} />
            <Route index path="/roadmap" element={<Roadmap />} />
            <Route index path="/university" element={<University />} />
            <Route index path="/project" element={<ProjectMain />} />
            <Route index path="viewRoadmap/:id" element={<RoadmapView />} />
            <Route index path="/viewProject/:id" element={<ProjectView />} />
            <Route index path="/profile" element={<Profile />} />
            <Route index path="/blog" element={<Blog/>}/>
            <Route index path="/mentor" element={<Mentor/>}/>
            <Route index path="/universityprofile" element={<UniProfile/>}/>
            <Route index path="/viewmentor/:id" element={<MentorView/>}/>
            <Route index path="/unversitysubjects" element={<UniSubject/>}/>
            <Route index path="/universityfaculty" element={<Mentor/>}/>
            <Route index path="/universitydepartment" element={<UniDept/>}/>
            <Route index path="/editimg" element={<EditImg/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
