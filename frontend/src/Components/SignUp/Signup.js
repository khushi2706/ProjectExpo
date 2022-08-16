import "./Signup.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";
import CustomizeDropDown from "./CustomizeDropDown";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [departs, setDeparts] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [formValue, setformValue] = useState({});

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
    // const res = await axios
    //   .post("http://localhost:5000/api/blogs/add", {
    //     title: inputs.title,
    //     desc: inputs.description,
    //     img: inputs.imageURL,
    //     user: localStorage.getItem("userId"),
    //   })
    //   .catch((err) => console.log(err));
    // const data = await res.data;
    // return data;
    console.log(formValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => console.log("done"));
  };

  const getDeprtId = async (e) => {
    const res = await axios
      .get(
        `http://localhost:5000/api/department/getByCollgeId/${e.target.value}`
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    setDeparts(await data.departments);
  };

  useEffect(() => {
    sendReq().then((data) => {
      setColleges(data.colleges);
    });
  }, []);

  console.log(colleges);
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
            // handleChange={handleFirstNameChange}
            type="text"
            placeholder="First Name"
          />

          <InputField
            // user={user}
            // handleChange={handleLastNameChange}
            type="text"
            placeholder="Last Name"
          />

          <CustomizeDropDown />
        </div>
      </div>
    </>
  );
}
