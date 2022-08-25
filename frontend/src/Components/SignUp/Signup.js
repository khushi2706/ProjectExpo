import "./Signup.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import google_logo from "../../Assets/Images/google.svg";
import { NavLink } from "react-router-dom";

export default function Signup(props) {
  const [departs, setDeparts] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [formValue, setformValue] = useState({});

  let skillset = ['Frontend','Full Stack','Backend','DataBase','ML','Data Science','UI/UX','DevOps','OA','Testing']

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/college`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleChange = (e) => {
    setformValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    console.log(formValue);
    formValue.CollegeName = "Birla Vishwakarma Mahavidyalaya"
    // formValue.CollegeId="62f636b7b4953acc377e8643"
     formValue.DepartmentName="EL"
    const res = await axios
      .post("http://localhost:5000/api/student/add", formValue)
      .catch((err) => console.log(err));
    console.log(res);
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => console.log("done"));
  };

  const getDeprtId = async (e) => {
    console.log("depart id: " + e.target.value);
    setformValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    const res = await axios
      .get(
        `http://localhost:5000/api/department/getByCollgeId/${e.target.value}`
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    setDeparts(await data.departments);
  };

  // console.log("data.depatments"+JSON.parse(res["data"]));

  const setDprtId = async (e) => {
    formValue.DepartmentId = e.target.value;
  };

  useEffect(() => {
    sendReq().then((data) => {
      setColleges(data.colleges);
    });
  }, []);

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
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#F6F7FB",
            borderRadius: 10,
            paddingLeft: 68,
            paddingRight: 68,
            paddingTop: 61,
            paddingBottom: 61,
            width: "40%",
            marginTop: 25,
          }}
        >
          <div className="box" style={{ width: "100%" }}>
            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="email"
                className="sign-in-input-fields"
                placeholder="Email"
                name="Email"
                value={formValue.Email}
                onChange={handleChange}
              />
            </div>

            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="password"
                className="sign-in-input-fields"
                placeholder="Password"
                name="Pass"
                value={formValue.Pass}
                onChange={handleChange}
              />
            </div>

            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="text"
                className="sign-in-input-fields"
                placeholder="First Name"
                name="Fname"
                value={formValue.Fname}
                onChange={handleChange}
              />
            </div>

            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="text"
                className="sign-in-input-fields"
                placeholder="Last Name"
                name="LName"
                value={formValue.LName}
                onChange={handleChange}
              />
            </div>

            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="text"
                className="sign-in-input-fields"
                placeholder="About Me"
                name="AboutMe"
                value={formValue.AboutMe}
                onChange={handleChange}
              />
            </div>

            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="date"
                className="sign-in-input-fields"
                placeholder="Date of birth"
                name="DoB"
                value={formValue.DoB}
                onChange={handleChange}
              />
            </div>

            <div
              className="sign-in-input-field-container"
              style={{ marginTop: 15 }}
            >
              <input
                type="text"
                className="sign-in-input-fields"
                placeholder="Gender"
                name="Gender"
                value={formValue.Gender}
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="sign-in-input-field-container"
            name=""
            id="form"
            onClick={getDeprtId}
          >
            <select onChange={props.handleChange} name="CollegeId">
              <option value=" ">Select college </option>
              {colleges &&
                colleges.map((clg, idx) => {
                  return <option value={clg._id}>{clg.CName}</option>;
                })}
            </select>
          </div>

          <div className="sign-in-input-field-container" id="form">
            <select name="DepartmentId" onChange={setDprtId} id="">
              <option value=" ">Select Department </option>
              {departs &&
                departs.map((dp, idx) => {
                  return <option value={dp._id}>{dp.DepartName}</option>;
                })}
            </select>
          </div>

          <div
          className="sign-in-input-field-container"
          style={{ marginTop: 15 }}
        >
          <input
            type="text"
            className="sign-in-input-fields"
            placeholder="Passing year"
            name="PassOutYear"
            value={formValue.PassOutYear}
            onChange={handleChange}
          />
        </div>

        <div
          className="sign-in-input-field-container"
          style={{ marginTop: 15 }}
        >
          <input
            type="text"
            className="sign-in-input-fields"
            placeholder="Enter Your Language Tag"
            name="LanguageTag"
            value={formValue.LanguageTag}
            onChange={handleChange}
          />
        </div>
       

      <div className="sign-in-input-field-container" id="form">
            <select name="Skill" onChange={handleChange} id="">
              <option value=" ">Select Your SkillSet </option>
              {
                skillset.map((dp, idx) => {
                  return <option value={dp}>{dp}</option>;
                })}
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
            <div>Already have an account ?</div>
            <NavLink className="nav-link" to="/login"> 
            <div
              style={{
                color: "#2C5EFF",
                fontWeight: "bolder",
                marginLeft: 5,
              }}
            >
              Login in
            </div>
            </NavLink>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={handleSubmit}
              className="sign-in-button"
              style={{ width: "80%", height: "6vh", marginTop: 17 }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
