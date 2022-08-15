import "./Signup.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";
import CustomizeDropDown from "./CustomizeDropDown";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {

  const [departs,setDeparts] = useState([]); 
  const [colleges, setColleges] = useState([]);
  const [ formValue , setformValue ] = useState({
   Email : "",
    Pass: "",
    Fname: "",
    LName: "",
    AboutMe: "",
    DoB: "",
    Gender:"",
    DepartmentId:"",
  })

  
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
    const res = await axios
    .post("http://localhost:5000/api/student/add",formValue)
    .catch((err)=>console.log(err));
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

const getDeprtId = async(e) =>{
    console.log("depart id ")
    const res = await axios
    .get(`http://localhost:5000/api/department/getByCollgeId/${e.target.value}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    // console.log("data.depatments"+JSON.parse(res["data"]));
    setDeparts( await data.departments);
  }

  const setDprtId = async(e)=>{
    formValue.DepartmentId = e.target.value;
  }
useEffect(() => {
      sendReq().then((data) => {
        setColleges(data.colleges);
      });
  }, []);
 
  return(
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
       
    <form onSubmit={handleSubmit} style={{
            background: "#F6F7FB",
            borderRadius: 10,
            paddingLeft: 68,
            paddingRight: 68,
            paddingTop: 61,
            paddingBottom: 61,
            width: "40%",
            marginTop: 25,
          }}>
        <div className="box" style={{width: "100%",display: "block"}}>
          <label htmlFor="">Email</label>
          <input type="email" 
          name="Email"
          onChange={handleChange}
          value={formValue.Email} style={{width: "100%",}} />
          <label htmlFor="">Password</label>
          <input type="password"  onChange={handleChange} name="Pass" value={formValue.Pass} id=""  style={{width: "100%"}}/>
          <label htmlFor="" >First Name</label>
          <input type="text"  onChange={handleChange} value={formValue.Fname} name="Fname"  style={{width: "100%"}}/>
          <label htmlFor="" >Last Name</label>
          <input type="text"  onChange={handleChange} value={formValue.LName} name="LName"  style={{width: "100%"}}/>
          <label htmlFor="">About Me</label>
          <input type="text"   onChange={handleChange} value={formValue.AboutMe} name="AboutMe"  style={{width: "100%"}}/>
          <label htmlFor="">Date of Birth</label>
          <input type="date"   onChange={handleChange} value={formValue.DoB} name="DoB" id=""  style={{width: "100%"}}/>
          <label htmlFor="">Gender</label>
          <input type="text"  onChange={handleChange} value={formValue.Gender} name="Gender" style={{width: "100%"}}/>
          
        </div>
        <div className="box" style={{width: "100%",display: "block"}}>
          <select name="" id="form" class="form-control" onClick={getDeprtId} style={{margin: "10px 0"}}>
          <option value=" " >------select college ------</option>
            {
              colleges && 
              colleges.map((clg,idx)=>{
                return(
                  <option value={clg._id} >{clg.CName}</option>
                )
              })
            }
          </select>
          <select name="DepartmentId" onChange={setDprtId} class="form-control" id="" style={{margin: "10px 0"}}>
          <option value=" " unselectable="true">------select department ------</option>
            {
              departs && 
              departs.map((dp,idx)=>{
                return(
            <option value={dp._id}>{dp.DepartName}</option>
            )
          })
        }
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
            <div
              style={{ color: "#2C5EFF", fontWeight: "bolder", marginLeft: 5 }}
            >
              Login in
            </div>
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
         
    </form>
    </div>
   </> 
  )
}