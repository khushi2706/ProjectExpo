import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


export default function Header() {

 
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-style">
      <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
      Logo
      </NavLink>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-flex  menu" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center ">
            
           
            <li className="nav-item">
            <NavLink className="nav-link active" to="/project">
            Project
      </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to="/UploadProject">
            Upload Project
      </NavLink>
              
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
            Blog
      </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/roadmap">
            Roadmap
      </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/mentor">
           Mentor
      </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/university">
            University
      </NavLink>
            </li>
          
            <NavLink 
              className="nav-link" to="/Logout"
			        >
             Logout
			       </NavLink>
          </ul>
        </div>
        <div className="profile w-5 h-5">
          <img src="https://picsum.photos/200" className="w-100 h-100 rounded-circle" />
        </div>
      </div>
    </nav>
  );
}
