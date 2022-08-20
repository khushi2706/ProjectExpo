import React ,{useEffect} from 'react'
import InputField from '../Common/InputField'
import google_logo from '../../Assets/Images/google.svg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

var inp = {
    marginTop: "1rem",
    padding: "0.5rem",
  };


function Task() {
    const [s,sets] = useState('');
    const [sub,setsub] = useState();
    const [d,setd] = useState('');
    const [email, setEmail] = useState("");
    const [usern, setUsern] = useState("");
    const [dept,setdept] =useState();
const clgid = "62f8724e92cfa9015a3befc9";
    const sendReq = async () => {
        const res = await axios
          .get(`http://localhost:5000/api/department/getByCollgeId/62f8724e92cfa9015a3befc9`)
          .catch((err) => console.log(err));
        const data = await res.data;
        //console.log("Data from API:" + data[0].Fname);
        return data;
      };

      const sendReq2 = async () => {
        console.log("----");
        console.log(d);
        const res = await axios
          .get(`http://localhost:5000/api/subject/getByDepartId/${d}`)
          .catch((err) => console.log(err));
        const data = await res.data;
        //console.log("Data from API:" + data[0].Fname);
        return data;
      };

      useEffect(() => {
        sendReq().then((data) => {
            setdept(data.departments)
          
          console.log(dept);
        });
      
        sendReq2().then((data) => {
            setsub(data.subjects)
          
          console.log(sub);
        });
       
      }, [])
      
const handlechanges = ( e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setd(value);
    console.log(d);
}
 

const handlechanges2 = ( e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value;

    sets(value);
    console.log(s);
}
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
            marginTop: 25
        }}
        >
      


    <input
    className="form-control  sign-in-input-field-container"
    type="search"
    placeholder="Your Name"
    aria-label="Search"
    style={inp}
    onChange={(e) => setUsern(e.target.value)}
    value={usern}
  />

  
  <input
  className="form-control  sign-in-input-field-container"
  type="email"
  placeholder="Email"
  aria-label="Search"
  style={inp}
  onChange={(e) => setEmail(e.target.value)}
  value={email}
/>


    
{ dept && 
    <div className="sign-in-input-field-container">
    <select className="select"  name="deptid">
      {dept.map((college, index) => {
        return (
          <>
            <option value={college._id} >{college._id}</option>
          </>
        );
      })}
    </select>
  </div>
  }

  
  { sub && 
    <div className="sign-in-input-field-container">
    <select className="select" onChange={handlechanges} name="subid">
      {sub.map((college, index) => {
        return (
          <>
            <option value={college._id} >{college.SubName}</option>
          </>
        );
      })}
    </select>
  </div>
  }
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

  )
}

export default Task
