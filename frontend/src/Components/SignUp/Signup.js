import './Signup.css';
import InputField from '../Common/InputField'
import google_logo from '../../Assets/Images/google.svg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
var inp = {
    marginTop: "1rem",
    padding: "0.5rem",
  };
export default function Signup(props) {
    const [cat,setCat] = useState('');
    const [pass,setPass] = useState('');
    const [cpass,setCpass] = useState('');
    const [email, setEmail] = useState("");
    const [usern, setUsern] = useState("");
  return (
    <>
    <div
        style={{
        fontSize: 36,
        fontWeight: "bold",
        fontFamily: '"Poppins"',
        textAlign: "center",
        marginTop: 38
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
            marginTop: 25
        }}
        >
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

      <input
      className="form-control  sign-in-input-field-container"
      type="email"
      placeholder="Email"
      aria-label="Search"
      style={inp}
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />

    <input
    className="form-control  sign-in-input-field-container"
    type="search"
    placeholder="Username"
    aria-label="Search"
    style={inp}
    onChange={(e) => setUsern(e.target.value)}
    value={usern}
  />


        <input
        className="form-control sign-in-input-field-container"
        type="password"
        placeholder="Password"
        aria-label="Search"
        style={inp}
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
        
      <input
      className="form-control sign-in-input-field-container"
      type="password"
      placeholder="Confirm Password"
      aria-label="Search"
      style={inp}
      onChange={(e) => setCpass(e.target.value)}
      value={cpass}
    />
    

        <div
            style={{
            textAlign: "center",
            marginTop: 25,
            fontFamily: "poppins",
            fontWeight: 800,
            display: "flex",
            flexDirection: "row"
            }}
        >
            <div>Already have an account ?</div>
            <NavLink style={{textDecoration:"none"}} to="/login">
            <div style={{ color: "#2C5EFF", fontWeight: "bolder", marginLeft: 5 }}>
            Login in
            </div>
            </NavLink>
 
        </div>
        <div style={{ textAlign: "center" }}>
            <button
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
                    margin: "auto"
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
