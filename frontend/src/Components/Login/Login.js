import React, { useState } from "react";
import { ReactDOM } from "react";
import { NavLink } from "react-router-dom";
import google_logo from "../../Assets/Images/google.svg";

var search = {
  // backgroundColor:'#cce6ff',
  height: "100%",
  width: "100.8%",
  overflow: "hidden",
};

var wrapper = {
  backgroundColor: "#F6F7FB",
  height: "30rem",
  width: "600px",
  // overflow:'hidden',
};
var inp = {
  marginTop: "1rem",
  padding: "0.5rem",
};
var inp1 = {
  marginTop: "1rem",
  padding: "0.5rem",
};

var but = {
  backgroundColor: "#ffffff",
};
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cat, setCat] = useState("");
  console.log(email);

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
            <form className="form-inline">
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
                <div className="sign-in-input-field-container">
                  <select
                    className=" select "
                    aria-label=".form-select-sm example"
                    onChange={(e) => setCat(e.target.value)}
                  value={cat}
                  >
                    <option defaultValue="0" >Student</option>
                    <option value="1">Administrator</option>
                    <option value="2">University Administrator</option>
                    <option value="3">College Administrator</option>
                  </select>
                </div>
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
