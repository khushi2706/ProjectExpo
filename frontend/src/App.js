import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Roadmap from './Components/Roadmap/Roadmap';
import University from './Components/University/University';
import ProjectMain from './Components/Project/ProjectMain';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
function App() {

  return (
    <>
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <Home/> } />
        <Route index path="/Signup" element={ <Signup/> } />
        <Route index path="/Login" element={ <Login/> } />
        <Route index path="/roadmap" element={ <Roadmap/> } />
        <Route index path="/university" element= { <University/> } />
        <Route index path="/project" element = { <ProjectMain/> } />
      </Routes>   

     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
