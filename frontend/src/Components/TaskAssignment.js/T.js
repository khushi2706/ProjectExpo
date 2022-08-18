import React, { useEffect } from "react";
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

var inp = {
  marginTop: "1rem",
  padding: "0.5rem",
};

function T() {
  const [departs, setDeparts] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [formValue, setformValue] = useState({});

  const handleChange = (e) => {
    setformValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getDeprtId = async (e) => {
    // console.log("depart id: " + e.target.value);

    const res = await axios
      .get(
        `http://localhost:5000/api/department/getByCollgeId/62f8724e92cfa9015a3befc9`
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data)
    setDeparts(await data.departments);
    console.log(departs);
  };

  const getDeprtId2 = async (e) => {
    // console.log("depart id: " + e.target.value);

    const res = await axios
      .get(
        `http://localhost:5000/api/subject/getByDepartId/${e.target.value}`
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data)
    setColleges(await data.subjects);
    console.log(colleges);
  };

  const setDprtId = async (e) => {
    formValue.DepartmentId = e.target.value;
  };

  const clgid = "62f8724e92cfa9015a3befc9";
  // const sendReq = async () => {
  //     const res = await axios
  //       .get(`http://localhost:5000/api/department/getByCollgeId/62f8724e92cfa9015a3befc9`)
  //       .catch((err) => console.log(err));
  //     const data = await res.data;
  //     //console.log("Data from API:" + data[0].Fname);
  //     return data;
  //   };

  //   const sendReq2 = async () => {
  //     console.log("----");
  //     console.log(d);
  //     const res = await axios
  //       .get(`http://localhost:5000/api/subject/getByDepartId/${d}`)
  //       .catch((err) => console.log(err));
  //     const data = await res.data;
  //     //console.log("Data from API:" + data[0].Fname);
  //     return data;
  //   };

  //   useEffect(() => {
  //     sendReq().then((data) => {
  //         setdept(data.departments)

  //       console.log(dept);
  //     });

  //   }, [])

  // const handlechanges = ( e)=>{
  //     const target = e.target;
  //     const name = target.name;
  //     const value = target.value;

  //     setd(value);
  //     sendReq2().then((data) => {
  //         setsub(data.subjects)

  //       console.log(sub);
  //     });
  //     console.log(d);
  // }

  // const handlechanges2 = ( e)=>{
  //     const target = e.target;
  //     const name = target.name;
  //     const value = target.value;

  //     sets(value);
  //     console.log(s);
  // }
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
        Generate Link For Task
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
          <input
            className="form-control  sign-in-input-field-container"
            type="email"
            name="Email"
            onChange={handleChange}
            value={formValue.Email}
            style={inp}
            placeholder="Enter Email"
          />

          <input
            className="form-control  sign-in-input-field-container"
            placeholder="Email"
            aria-label="Search"
            style={inp}
            type="text"
            onChange={handleChange}
            value={formValue.Fname}
            name="Fname"
          />

          {departs && (
            <div className="sign-in-input-field-container">
              <select className="select" onChange={getDeprtId} name="deptid">
                {departs.map((college, index) => {
                  return (
                    <>
                      <option value={college._id}>{college._id}</option>
                    </>
                  );
                })}
              </select>
            </div>
          )}
          {colleges && (
            <div className="sign-in-input-field-container">
              <select className="select" onChange={getDeprtId2} name="subid">
                {colleges.map((college, index) => {
                  return (
                    <>
                      <option value={college._id}>{college.SubName}</option>
                    </>
                  );
                })}
              </select>
            </div>
          )}
          
          <div style={{ textAlign: "center" }}>
            <button
              className="sign-in-button"
              style={{ width: "80%", height: "7vh", marginTop: 17 }}
            >
              Generate Link For Submission
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default T;
