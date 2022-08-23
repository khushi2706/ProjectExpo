import React, { useState } from "react";
import { ReactDOM } from "react";
import { NavLink } from "react-router-dom";
import google_logo from "../../Assets/Images/google.svg";
import axios from "axios";
import Cookies from 'universal-cookie'

var inp = {
  marginTop: "1rem",
  padding: "0.5rem",
};

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const cookies = new Cookies();
  const sendReq = async () => {
    const res = await axios
      .post(`http://localhost:5000/api/user/login`,
      {
        Email : email,
        Password : pass
    })
      .catch((err) => console.log(err));
      const data = await res.data;
    return data;
  };

  const loginUser = (event)=>{
    event.preventDefault()
    console.log(email,pass);
      sendReq().then((data)=>{
        const cookies = new Cookies();

        cookies.set('authToken', data.authToken , { path: '/' });
        cookies.set('userId' , data.userId,   { path: '/' });
        cookies.set('userType', data.userType, {path:'/'});
        cookies.set('uTypeId', data.uTypeId, {path:'/'});
        console.log(data);

         if(data.userType == "College-admin")
         window.location.href = "/collegeprofile";
         else if(data.userType == "Student")
         window.location.href = "/myProfile"
         else if(data.userType == "Professor")
         window.location.href = "/faculty"
         else
         window.location.href = "/"

    })
  }
  return (
    <>
      {/* <div className="row justify-content-center align-items-center  " style={search}> */}
      <div
        style={{
          fontSize: 36,
          fontWeight: "bold",
          fontFamily: '"Poppins"',
          textAlign: "center",
          marginTop: 38,
        }}
      >
        Login
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
          <div className="w-100 text-center">
            <form className="form-inline" onSubmit={loginUser}>
              <div className="col m-auto">
                <input
                  className="form-control  sign-in-input-field-container"
                  type="search"
                  placeholder="Email"
                  aria-label="Search"
                  style={inp}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <input
                  className="form-control sign-in-input-field-container"
                  type="search"
                  placeholder="Password"
                  aria-label="Search"
                  style={inp}
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
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
                  <div>Dont Have Account?</div>
                  <NavLink
                    className=""
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    <div
                      style={{
                        color: "#2C5EFF",
                        fontWeight: "bolder",
                        marginLeft: 5,
                      }}
                    >
                      Sign Up there..
                    </div>
                  </NavLink>
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                  type="submit"
                    className="sign-in-button"
                    style={{ width: "80%", height: "6vh", marginTop: 17 }}
                  >
                    Login
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    className="sign-in-with-google-button"
                    style={{ height: "6vh" }}
                  >
                    <div style={{ display: "flex" }}>
                      <div style={{ margin: "auto" }}>
                        <img
                          src={google_logo}
                          alt=""
                          width="70%"
                          height="70%"
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "poppins",
                          fontWeight: "bold",
                          margin: "auto",
                        }}
                      >
                        Login with Google
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: 25,
                    fontFamily: "poppins",
                    fontWeight: 800,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div>Forgot Password?</div>
                  <div
                    style={{
                      color: "#2C5EFF",
                      fontWeight: "bolder",
                      marginLeft: 5,
                    }}
                  >
                    Click here
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
