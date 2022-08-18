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
  
    const sendReq = async () => {
      const res = await axios
        .get(`http://localhost:5000/api/department/getByCollgeId/62f8724e92cfa9015a3befc9`)
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
  
    const [showw,setshoww] = useState("false")
    const getDeprtId = async (e) => {
      console.log("depart id: " + e.target.value);
  
      const res = await axios
        .get(
          `http://localhost:5000/api/subject/getByDepartId/${formValue.DepartmentId}`
        )
        .catch((err) => console.log(err));
      const data = await res.data;
      setDeparts(await data.subjects);
    };
  
    // console.log("data.depatments"+JSON.parse(res["data"]));
  
    const setDprtId = async (e) => {
      formValue.DepartmentId = e.target.value;
    };
  

    const setSubId = async (e) => {
        formValue.SubId = e.target.value;
        console.log( formValue.SubId)
      };
var link = "http://localhost:3000/UploadProject/Stage1/"
      const generatelink = ()=>{
        var add = formValue.SubId;
        link+=add;
        console.log(link);
        setshoww("true");
      }

      const copylink = () =>{
        navigator.clipboard.writeText(link+formValue.SubId)
      }
    useEffect(() => {
      sendReq().then((data) => {
        setColleges(data.departments);
      });
    }, []);
   var hreff = `mailto:dvala453@gmail.com?subject=${formValue.Fname}&body=link for submission :---- ${link+formValue.SubId}`
  const clgid = "62f8724e92cfa9015a3befc9";
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
            placeholder="Title of Assignment"
            aria-label="Search"
            style={inp}
            type="text"
            onChange={handleChange}
            value={formValue.Fname}
            name="Fname"
          />
          <select
          name=""
          id="form"
          class="form-control"
          onClick={getDeprtId}
          style={{ margin: "10px 0" }}
          onChange={setDprtId}
        >
          <option value=" ">------select department ------</option>
          {colleges &&
            colleges.map((clg, idx) => {
              return <option value={clg._id}>{clg.DepartName}</option>;
            })}
        </select>
        <select
          name="DepartmentId"
          onChange={setSubId}
          class="form-control"
          id=""
          style={{ margin: "10px 0" }}
        >
          <option value=" " unselectable="true">
            ------select subject ------
          </option>
          {departs &&
            departs.map((dp, idx) => {
              return <option value={dp._id}>{dp.SubName}</option>;
            })}
        </select>
        <div style={{ textAlign: "center" }}>
            <button
              className="sign-in-button"
              style={{ width: "80%", height: "8vh", marginTop: 17 }}
              onClick={generatelink}
            >
              Generate Link For Submission
            </button>
          </div>
{
    showw=="true" && <div className='btn'>
    <button className="button  btn-ed button-primary" onClick={copylink}>
      Copy Link
    </button>
    
    
    <a style={{textDecoration:"none"}} className="button btn-ed button-primary" href={hreff}> Share Now </a>

    
  </div>
}
          
          
            </div>
       
          
          
        </div>
    </>
  );
}

export default T;
