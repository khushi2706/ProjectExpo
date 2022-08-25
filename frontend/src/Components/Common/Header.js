import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
   
    <>
            <div>
              <div className="main-container-header">
                <div>
                  <img src=""></img>
                </div>
                <div>
                  <div className="tab-container-header">
                    <div className="tab-container">
                      <NavLink className="nav-link active" to="/project">
                        Project
                      </NavLink>
                    </div>
                    <div className="tab-container">
                      <NavLink className="nav-link " to="/UploadProject/Stage1">
                        Upload Project
                      </NavLink>
                    </div>
                    <div className="tab-container">
                      <NavLink className="nav-link" to="/blog">
                        Blog
                      </NavLink>
                    </div>
                    <div className="tab-container">
                      <NavLink className="nav-link" to="/roadmap">
                        Roadmap
                      </NavLink>
                    </div>
                    <div className="tab-container">
                      <NavLink className="nav-link" to="/mentor">
                        Mentor
                      </NavLink>
                    </div>
                    <div className="tab-container">
                      <NavLink className="nav-link" to="/university">
                        University
                      </NavLink>
                    </div>
                    <div className="tab-container">
                      <NavLink className="nav-link" to="/Logout">
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
                    <div className="profile w-1 h-5">
                      <img
                        src="https://picsum.photos/200"
                        className="w-110 h-110 rounded-circle"
                        style={{ width: 70, height: 70 }}
                        height="100px"
                      />
                    </div>
                  </div>
                  <div>
                    <i
                      className="material-icons"
                      style={{
                        marginLeft: 10,

                        fontSize: 28,
                        color: "#9B9B9B",
                      }}
                    >
                      arrow_drop_down
                    </i>
                  </div>
                </div>

              </div>
              <hr className="horizontal-line"></hr>
            </div>
          </>

          );
}
