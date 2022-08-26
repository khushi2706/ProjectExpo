import React, { useEffect, useState } from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate, Link, useParams } from "react-router-dom";
import Header from "../Common/Header";
import "./StudentProfile.css";

import ProjectCard from "../Profile/ProjectCard";
import Tag from "../Common/Tag";

export default function StudentProfile() {
  const { id } = useParams();
  console.log("Student ID: " + id);
  const [projects, setProjects] = useState();
  const [title, setTitle] = useState("Follow");
  const [icon, setIcon] = useState("person_add");
  const projectStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 10,
  };
  
  const cookies = new Cookies();
  const UserType = cookies.get("userType");

  const studentId = cookies.get("uTypeId");

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/Project/UserId/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      setProjects(data.project);
      console.log(projects);
      console.log(data.project);
    });
  }, []);

  const handleClickEvent = () => {
    if (title == "Follow") {
      setTitle("Unfollow");
      setIcon("person_remove");
    } else {
      setTitle("Follow");
      setIcon("person_add");
    }
  };

  return (
    <>
      <Header index="1"/>
      <div className="parent">
        <div
          className="profile-background-card profile-main-container"
          style={{ marginLeft: 10 }}
        >
          <div>
            <div className="row-container-cust">
              {/* User Photo */}
              <div className="profile w-1 h-5">
                <img
                  src="https://picsum.photos/200"
                  className="w-110 h-110 rounded-circle"
                  style={{ width: 70, height: 70 }}
                  height="100px"
                />
              </div>
              {/* User name */}
              <div className="column-container">
                <div className="name-title-container">Nikunj Patel</div>
                <div className=" button-display" onClick={handleClickEvent}>
                  <i
                    className="material-icons circle"
                    style={{
                      marginTop: 3,
                      fontSize: 28,
                      color: "#fff",
                      fontSize: 23,
                    }}
                  >
                    {icon}
                  </i>
                  <div className="button-title-container">{title}</div>
                </div>
              </div>
            </div>
            <div className="about-us-container">
              Hello everyone, this is Nikunj Patel. I am an Android developer
            </div>
            <hr className="horizontal-line"></hr>
            <div className="college-container" style={{ marginTop: 10 }}>
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                apartment
              </i>
              <div className="college-text-container">
                Birla vishvakrama Mahavidhyala
              </div>
            </div>

            <div className="college-container">
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                email
              </i>
              <div className="college-text-container">
                ndpatel.tech@gmail.com
              </div>
            </div>

            <div className="college-container">
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                business_center
              </i>
              <div className="college-text-container">Computer</div>
            </div>

            <div className="college-container">
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                school
              </i>
              <div className="college-text-container">2023</div>
            </div>
            <hr className="horizontal-line"></hr>
            <div className="skills-container">Skills</div>
            <div className="skills-inner-container">
              <Tag title="Java" customeStyle={projectStyle} />
            </div>
            <hr className="horizontal-line"></hr>
            <div className="skills-container">Domain</div>
            <div className="skills-inner-container">
              <Tag title="Machine Learning" customeStyle={projectStyle} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            marginRight: 50,
          }}
        >
          <div style={{marginRight: 100}}>{projects &&
            projects.map((project, index) => (
              <Link
                style={{ textDecoration: "none",  }}
                to={{ pathname: `/viewProject/${project._id}` }}
              >
                <ProjectCard project={project} />
              </Link>
            ))}</div>
        </div>
      </div>
    </>
  );
}
