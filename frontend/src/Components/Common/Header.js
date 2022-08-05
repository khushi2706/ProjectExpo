import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-style">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/project">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/roadmap">
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mentor">
                Find Mentor
              </a>
            </li>
            <li className="nav-item">
              <a href="/university" className="nav-link">
                University
              </a>
            </li>
          
          </ul>
        </div>
        <div className="profile w-5 h-5">
          <img src="https://picsum.photos/200" className="w-100 h-100 rounded-circle" />
        </div>
      </div>
    </nav>
  );
}
