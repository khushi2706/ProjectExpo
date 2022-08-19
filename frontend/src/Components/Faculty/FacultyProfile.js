import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import axios from "axios";
import "./FacultyProfile.css";
export default function FacultyProfile() {
  const [myProfessor, setMyProfessor] = useState();
  const [myFacultyFirstName, setMyFacultyFirstName] = useState();
  const [myFacultyLastName, setMyFacultyLastName] = useState();
  const [myFacultyGender, setMyFacultyGender] = useState();
  const [myFacultyDob, setMyFacultyDob] = useState();
  const [myFacultyEmail, setMyFacultyEmail] = useState();
  const [myFacultyDegree, setMyFacultyDegree] = useState();

  const handleClickEvent = () => {
    // console.log("First Name: " + myFacultyFirstName);
    // console.log("Last Name: " + myFacultyLastName);
    // console.log("Gender: " + myFacultyGender);
    // console.log("Dob : " + myFacultyDob);
    // console.log("Email: " + myFacultyEmail);
    // console.log("Degree: " + myFacultyDegree);

    console.log(myProfessor);
  };

  const professorId = "62ff4ff502288569b439bc1f";

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/professor/getById/${professorId}`)

      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      console.log(data);
      setMyProfessor(data);
    });
  }, []);
  const handlechange = (e) => {
    setMyProfessor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //   console.log(myProfessor);

  return (
    <>
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
              {/* {singleUser && ( */}
              <div className="input-field-main-container">
                <div className="input-field-label-container">First Name</div>
                <div>
                  {myProfessor && (
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Ex. Nikunj"
                      value={myProfessor.Fname}
                      onChange={handlechange}
                      name="Fname"
                    />
                  )}
                </div>
              </div>
              {/* )} */}

              <div style={{ marginLeft: 10 }}>
                <div className="input-field-main-container">
                  <div className="input-field-label-container">Last Name</div>
                  <div>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Ex. Patel"
                      //   value={myProfessor.LName}
                      //   onChange={handlechange}
                      name="LName"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="input-field-main-container">
                <div className="input-field-label-container">Gender</div>
                <div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Ex. Male"
                    // value={val}
                    onChange={handlechange}
                    name="val"
                  />
                </div>
              </div>
              <div style={{ marginLeft: 10 }}>
                <div className="input-field-main-container">
                  <div className="input-field-label-container">
                    Date of Birth
                  </div>
                  <div>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Ex. 31/10/2000"
                      // value={val}
                      onChange={(e) => setMyFacultyDob(e.target.value)}
                      name="val"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <div className="input-field-main-container">
                <div className="input-field-label-container">Public Email</div>
                <div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Ex. ndpatel.tech@gmail.com"
                    // value={val}
                    onChange={(e) => setMyFacultyEmail(e.target.value)}
                    name="val"
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <div className="input-field-main-container">
                <div className="input-field-label-container">Degree</div>
                <div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Ex. B.tech in Computer Engineering"
                    // value={val}
                    onChange={(e) => setMyFacultyDegree(e.target.value)}
                    name="val"
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                justifyContent: "end",
              }}
            >
              <Button title={"Apply Changes"} onclick={handleClickEvent} />
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
                // src={singleUser.profile_pic}
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
    </>
  );
}
