import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate, Link } from "react-router-dom";
import Header from "../Common/Header";
import "./StudentProfile.css";
import Tags from "../Common/Tag";
import ProjectCard from "../Profile/ProjectCard";
import InputView from "./InputView";
export default function StudentProfile() {
  const [projects, setProjects] = useState();

  const projectStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
  };

  const domainStyle = {
    backgroundColor: "#D5F0E1",
    color: "#52B67D",
    fontSize: 17,
    fontWeight: "bold",
  };

  const userLevel = {
    backgroundColor: "#FFF5DC",
    color: "#DEBA81",
    fontSize: 17,
    fontWeight: "bold",
    borderRadius: 10,
  };
  const [singleUser, setSingleUser] = useState();

  const cookies = new Cookies();
  const UserType = cookies.get("userType");

  const studentId = cookies.get("uTypeId");

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/student/getStudentById/${studentId}`)

      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      console.log(data);
      setSingleUser(data);
    });
  }, []);

  const changeDetails = async () => {
    console.log("chnging");
    console.log(singleUser.LName);
    const res = await axios
      .put(`http://localhost:5000/api/student/changeDetails`, {
        StudentId: studentId,
        Fname: singleUser.Fname,
        LName: singleUser.LName,
        AboutMe: singleUser.AboutMe,
        DoB: singleUser.DoB,
        Gender: singleUser.Gender,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    window.location.href = "http://localhost:3000/myProfile";
    console.log(data);
  };
  const handlechange = (e) => {
    setSingleUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(singleUser);
  return (
    <>
      <Header />
      <div style={{ marginLeft: 50, marginRight: 50 }}>
        {UserType != "Student" && <Navigate to="/login" replace={true} />}
        {singleUser && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    background: "#F6F7FB",
                    borderRadius: 10,
                    paddingLeft: 68,
                    paddingRight: 68,
                    paddingTop: 10,
                    paddingBottom: 10,
                    width: "fit-content",
                    marginTop: 25,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <InputView title="First Name" value="Nikunj" />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <div style={{ marginLeft: 10 }}>
                        <InputView title="Last Name" value="Patel" />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <div>
                        <InputView
                          title="About me"
                          value="Hello everyone, this is Nikunj Patel"
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <div>
                        <InputView title="Gender" value="Male" />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <div style={{ marginLeft: 10 }}>
                        <InputView title="Date of Birth" value="31/10/2000" />
                      </div>
                    </div>
                  </div>
                  <InputView
                    title="College name"
                    value="Birla Vishvakarma Mahavidhyalaya"
                  />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <div>
                        <InputView title="Department" value="Computer" />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "poppins",
                        marginTop: 10,
                        flexGrow: 1,
                      }}
                    >
                      <div style={{ marginLeft: 10 }}>
                        <InputView title="Passing Year" value="2023" />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                      justifyContent: "end",
                    }}
                  >
                    {/* here we have to place the follow button */}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "poppins",
                      fontSize: 22,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  ></div>
                </div>
              </div>

              <div className="row-container-cus">
                <div>
                  <div className="languages-container">Skills</div>
                </div>
                <div style={{ marginTop: 20 }}>
                  <div className="skills-container">
                    <Tags title="Java" customeStyle={projectStyle} />
                  </div>
                </div>
                <div
                  style={{
                    border: "2px solid #F5F7F9",
                    height: 1,
                    marginTop: 15,
                  }}
                ></div>
                <div className="languages-container" style={{ marginTop: 10 }}>
                  Domain
                </div>
                <div style={{ marginTop: 20 }}>
                  <Tags title="Machine Learning" customeStyle={domainStyle} />
                </div>
                <div
                  style={{
                    border: "2px solid #F5F7F9",
                    height: 1,
                    marginTop: 15,
                  }}
                ></div>
                <div className="languages-container" style={{ marginTop: 10 }}>
                  Level
                </div>
                <div style={{ marginTop: 20 }}>
                  <Tags title="Project Master" customeStyle={userLevel} />
                </div>
              </div>
            </div>
            {/* Project Section */}
            <div
              style={{
                border: "2px solid #F5F7F9",
                height: 1,
                marginTop: 15,
              }}
            ></div>

            {projects &&
              projects.map((project, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: `/viewProject/${project._id}` }}
                >
                  <ProjectCard project={project} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
