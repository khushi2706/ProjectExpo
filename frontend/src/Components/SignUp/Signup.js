import "./Signup.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";

export default function Signup(props) {
  const [email, setEmail] = useState();
  const [pass, setPassword] = useState();
  const [confPass, setConfPass] = useState();

  const sendReq = async () => {
    // res.set("Access-Control-Allow-Origin", "*");
    const user = JSON.stringify({
      Email: email,
      Password: pass,
      UserType: "Student",
    });

    console.log(user);

    // var config = {
    //   method: "post",
    //   url: "http://localhost:5000/api/user/register",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: user,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios
      .post("http://localhost:5000/api/user/register/", user)
      .then(console.log("We are getting executed"))
      .then((res) => console.log("Res.Data: " + res.data))
      .catch((err) => {
        console.log("Error:" + err);
      });

    //console.log("Data from API:" + data[0].Fname);
  };

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
    //console.log(value);
    setConfPass(value);
  };

  const handleClick = () => {
    console.log("onClick: " + email);
    console.log("onClick: " + pass);
    console.log("onClick: " + confPass);
    sendReq();
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
          <div className="sign-in-input-field-container">
            <select
              style={{
                fontSize: 18,
                fontFamily: "poppins",
                outline: "none",
                border: "none",
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <option>Student</option>
              <option>Faculty</option>
              <option>College Administrator</option>
              <option>University Administrator</option>
            </select>
          </div>
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
