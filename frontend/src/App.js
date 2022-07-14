import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/SignUp/Signup'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Roadmap from './Components/Roadmap/Roadmap';
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
      </Routes>   

     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
