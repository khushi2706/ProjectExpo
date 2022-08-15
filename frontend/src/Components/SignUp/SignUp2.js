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

export default function SignUp2() {
  //   const logProps = () => {
  //     console.log("FirstName: " + this.props);
  //   };

  const location = useLocation();
  const histroy = useNavigate();

  useEffect(() => {
    firstName = location.state.firstName;
    lastName = location.state.lastName;
    gender = location.state.gender;
    dob = location.state.dob;
  }, [location]);

  const [email, setEmail] = useState();
  const [pass, setPassword] = useState();
  const [confPass, setConfPass] = useState();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    //console.log(value);
    setEmail(value);
  };

  const handlePassChange = (event) => {
    const value = event.target.value;
    //console.log(value);
    setPassword(value);
  };

  const handleConfirPass = (event) => {
    const value = event.target.value;
    console.log(value);
    setConfPass(value);
  };

  const handleClick = () => {
    console.log("onClick: Email: " + email);
    console.log("onClick: Pass: " + pass);
    console.log("onClick: confPass: " + confPass);
    // sendReq();
    histroy("CollegeSelect", {
      state: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        dob: dob,
        password: pass,
      },
    });
  };

  return (
    <>
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
          <InputField
            // user={user}
            handleChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />
          <InputField
            // user={user}
            handleChange={handlePassChange}
            type="password"
            placeholder="Password"
          />
          <InputField
            // user={user}
            handleChange={handleConfirPass}
            type="password"
            placeholder="Confirm Password"
          />

          <div
            style={{
              textAlign: "center",
              marginTop: 25,
              fontFamily: "poppins",
              fontWeight: 800,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>Already have an account ?</div>
            <div
              style={{ color: "#2C5EFF", fontWeight: "bolder", marginLeft: 5 }}
            >
              Login in
            </div>
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
          <div style={{ textAlign: "center" }}>
            <button
              className="sign-in-with-google-button"
              style={{ height: "6vh" }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ margin: "auto" }}>
                  <img src={google_logo} alt="" width="70%" height="70%" />
                </div>
                <div
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    margin: "auto",
                  }}
                >
                  Sign in with Google
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
