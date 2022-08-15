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

const getDeprtId = async(e) =>{
    const res = await axios
    .get(`http://localhost:5000/api/department/getByCollgeId/${e.target.value}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    setDeparts( await data.departments);
  }

useEffect(() => {
      sendReq().then((data) => {
        setColleges(data.colleges);
      });
  }, []);
 
  console.log(colleges);
  return(
   <>
   <h1>form</h1>

    <form onSubmit={handleSubmit}>
    <label htmlFor="">Email</label>
    <input type="email" value={formValue.Email} />
    <label htmlFor="">Password</label>
    <input type="password" value={formValue.Pass} id="" />
    <label htmlFor="" >First Name</label>
    <input type="text" value={formValue.Fname} />
    <label htmlFor="" >Last Name</label>
    <input type="text" value={formValue.LName} />
    <label htmlFor="">About Me</label>
    <input type="text" value={formValue.AboutMe} />
    <label htmlFor="">Date of Birth</label>
    <input type="date" name="" value={formValue.DoB} id="" />
    <label htmlFor="">Gender</label>
    <input type="text" value={formValue.Gender}/>
    <label htmlFor="">College</label>
    <select name="" id="" onChange={getDeprtId}>
      {
        colleges && 
        colleges.map((clg,idx)=>{
          return(
      <option value={clg._id}>{clg.CName}</option>
          )
        })
      }
    </select>
    <select name="" class="form-control" id="">
      {
        departs && 
        departs.map((dp,idx)=>{
          return(
      <option value={dp._id}>{dp.DepartName}</option>
          )
        })
      }
    </select>
    </form>
   </> 
  )
}