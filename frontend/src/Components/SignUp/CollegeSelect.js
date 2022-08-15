import "./Signup.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";
import CustomizeDropDown from "./CustomizeDropDown";
import { useLocation } from "react-router-dom";

let firstName = "";
let lastName = "";
let gender = "";
let dob = "";
let email = "";
let password = "";
export default function CollegeSelect() {
  const [collegeId, setCollegeId] = useState();
  const [collegeName, setCollegeName] = useState();
  const [colleges, setColleges] = useState();

  const location = useLocation();

  useEffect(() => {
    firstName = location.state.firstName;
    lastName = location.state.lastName;
    gender = location.state.gender;
    dob = location.state.dob;
    email = location.state.email;
    password = location.state.password;

    sendReq().then((data) => {
      setColleges(data.colleges);
      //   console.log(data.colleges[0].CName);
      setCollegeId(data.colleges[0]._id);
      setCollegeName(data.colleges[0].CName);
    });
  }, [location]);

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/college`)
      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    return data;
  };

  const handleClick = () => {};
  console.log(colleges);
  return (
    <>
      {colleges && (
        <div>
          <div
            style={{
              fontSize: 36,
              fontWeight: "bold",
              fontFamily: '"Poppins"',
              textAlign: "center",
              marginTop: 38,
            }}
          >
            Sign Up
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "#F6F7FB",
                borderRadius: 10,
                paddingLeft: 68,
                paddingRight: 68,
                paddingTop: 61,
                paddingBottom: 61,
                width: "fit-content",
                marginTop: 25,
              }}
            >
      <div className="sign-in-input-field-container">
        <select >
        {  colleges.map((college,index)=>{ return(
        <>
        <option value={college._id}>{college.CName}</option>
        </>)
       })}
           
        </select>
      </div>
             
              <div style={{ textAlign: "center" }}>
                <button
                  onClick={handleClick}
                  className="sign-in-button"
                  style={{ width: "80%", height: "6vh", marginTop: 17 }}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
