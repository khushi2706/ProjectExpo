import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import ProfileInputField from "./ProfileInputField";
import axios from "axios";

export default function Profile() {
  const [singleUser, setSingleUser] = useState();

  const studentId = "62f779d74af7b7b96e43a2f7";

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

  const changeDetails = async()=>{
    console.log("chnging");
    console.log(singleUser.LName);
    const res = await axios.put(
      `http://localhost:5000/api/student/changeDetails`,
      {
        "StudentId": "62f779d74af7b7b96e43a2f7",
       "Fname": singleUser.Fname,
        "LName": singleUser.LName,
        "AboutMe" :singleUser.AboutMe,
        "DoB": singleUser.DoB,
        "Gender": singleUser.Gender
      }
    )
    .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    console.log(data);
  }
  console.log(singleUser);
  return (
    <>
      {singleUser && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <div
              style={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: 26,
                marginLeft: 30,
              }}
            >
              My Profile
            </div>
            <div
              style={{
                border: "2px solid #F5F7F9",
                marginLeft: "auto",
                marginRight: "auto",
                height: 1,
                marginTop: 5,
                width: "-webkit-fill-available",
              }}
            ></div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {singleUser && (
                  <ProfileInputField
                    title={"First Name"}
                    placeholder={"Ex: Nikunj"}
                    vale={singleUser.Fname}
                  />
                )}

                <div style={{ marginLeft: 10 }}>
                  <ProfileInputField
                    title={"Last Name"}
                    placeholder={"Ex: Patel"}
                    vale={singleUser.LName}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
              
                  <ProfileInputField
                    title={"About Me"}
                    placeholder={"I AM student"}
                    vale={singleUser.AboutMe}
                  />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ProfileInputField
                  title={"Gender"}
                  placeholder={"Ex: Male"}
                  vale={singleUser.Gender}
                />
                <div style={{ marginLeft: 10 }}>
                  <ProfileInputField
                    title={"DOB"}
                    placeholder={"Ex: 31/10/2000"}
                    vale={singleUser.DoB}
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  justifyContent: "end",
                }}
              >
                  <button
      className="search-bar-button"
      style={{ width: "fit-content", height: 50 }}
      onClick={changeDetails} 
    >Submit</button>
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
              >
                Profile Picture
              </div>
              <div
                className="profile w-5 h-5"
                style={{ marginTop: 20, marginBottom: "auto" }}
              >
                <img
                  src={singleUser.profile_pic}
                  className="w-110 h-110 rounded-circle"
                  height="300px"
                />
              </div>
              <div style={{ marginTop: 50 }}></div>
              <button
                style={{
                  width: "fit-content",
                  paddingLeft: 30,
                  paddingRight: 30,
                  marginBottom: "auto",
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                  height: 45,
                  borderColor: "#2C5EFF",
                  borderWidth: 1,
                  borderRadius: 5,
                  background: "#ffffff",
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
                }}
              >
                <div style={{}}>
                  <i
                    className="material-icons"
                    style={{
                      marginLeft: 10,
                      fontSize: 28,
                      color: "#2C5EFF",
                      paddingTop: 7,
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    edit
                  </i>
                </div>
                <div
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "#2C5EFF",
                    marginLeft: 10,
                  }}
                >
                  Edit Picture
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
