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
import SignUp2 from "./Components/SignUp/SignUp2";
import CollegeSelect from "./Components/SignUp/CollegeSelect";
import MyProfile from "./Components/Profile/MyProfile";
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
            <Route index path="/MyProfile" element={<MyProfile />} />
            <Route index path="/blog" element={<Blog />} />
            <Route index path="/mentor" element={<Mentor />} />
            <Route index path="/viewmentor/:id" element={<MentorView />} />
            <Route index path="/signup/signup2" element={<SignUp2 />} />
            <Route
              index
              path="/signup/signup2/collegeSelect"
              element={<CollegeSelect />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
