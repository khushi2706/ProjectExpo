import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  let index = props.index;
  return (
    <>
      <div>
        <div className="main-container-header">
          <NavLink className="nav-link" to="/">
            <div>
             Logo
            </div>
          </NavLink>
          <div>
            <div className="tab-container-header">
              <div className="tab-container">
                <NavLink className=
                {(index==1)? "nav-link active" : "nav-link" } to="/project">
                  Project
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index==2)? "nav-link active" : "nav-link" } to="/UploadProject">
                  Upload Project
                </NavLink>
              </div>
              
              <div className="tab-container">
                <NavLink className={(index==3)? "nav-link active" : "nav-link" } to="/requirement">
                  Hiring
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index==5)? "nav-link active" : "nav-link" } to="/mentor">
                  Mentor
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index==6)? "nav-link active" : "nav-link" } to="/university">
                  University
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index==0)? "nav-link active" : "nav-link" } to="/aboutus">
                  About
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index==4)? "nav-link active" : "nav-link" } to="/contact">
                  Contact
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index==7)? "nav-link active" : "nav-link" } to="/Logout">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className="tag-container"
            style={{
              justifyContent: "center",
              height: 100,
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              <NavLink className="nav-link" to="/login">
                <div className="profile w-1 h-5">
                  <img

                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

                    className="w-110 h-110 rounded-circle"
                    style={{ width: 70, height: 70 }}
                    height="100px"
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
      </div>
    </>
  );
}
