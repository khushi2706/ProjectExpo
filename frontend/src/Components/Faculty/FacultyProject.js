import React, { useEffect, useState } from "react";
import SideBarOption from "../Profile/SideBarOption";
import { useLocation } from "react-router-dom";
import MyProjects from "../Profile/MyProjects";

export default function FacultyProject() {
  const location = useLocation();
  const [myProfile, setMyProfile] = useState(true);

  const handleMyProfileClick = () => {
    setMyProfile(true);
    console.log("My Profile clicked");
  };

  const handleMyProjectClick = () => {
    setMyProfile(false);
    console.log("My Project clicked");
  };

  const handleLogoutClick = () => {
    console.log("we are loging out");
    window.location = "/Logout";
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "left",
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              <div className="profile w-5 h-5">
                <img
                  src="https://picsum.photos/200"
                  className="w-110 h-110 rounded-circle"
                  height="100px"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  // marginTop: 50,
                  marginLeft: 20,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                  fontSize: 22,
                  textAlign: "start",
                }}
              >
                Nikunj Patel
              </div>

              <div
                style={{
                  marginLeft: 20,
                  fontSize: 16,
                  color: "#9B9B9B",
                  fontWeight: "500",
                }}
              >
                ndpatel.tech@gmail.com
              </div>
            </div>
          </div>
          {/* horizontal line */}
          <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

          {/* options */}
          <SideBarOption
            icon="person"
            title="My Profile"
            onClick={handleMyProfileClick}
          />
          <SideBarOption icon="book" title="Subject" />

          <SideBarOption
            icon="logout"
            title="Logout"
            onClick={handleLogoutClick}
          />
        </div>
        {/* vertical line */}
        <div
          style={{
            border: "2px solid #F5F7F9",
            // height: "-webkit-fill-available",
            // marginTop: "auto",
            // marginBottom: "auto",
            marginLeft: 20,
          }}
        >
          {/* this is for line */}
        </div>
        {/* profile section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "start",
            marginLeft: 40,
            width: "-webkit-fill-available",
          }}
        >
          {location.state != null ? (
            <MyProjects subject_id={location.state.subject_id} />
          ) : (
            <MyProjects />
          )}
        </div>
      </div>
    </>
  );
}
