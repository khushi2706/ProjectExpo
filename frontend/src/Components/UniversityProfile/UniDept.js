
import React, { useEffect, useState } from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios"
import "./UniProfile.css"
import { NavLink } from "react-router-dom";
import DeptCard from './DeptCard';
import Pop from "./Pop";
import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";

function UniDept() {

  const cookies = new Cookies();
 const UserType = cookies.get('userType');
 
 const CollegeId = cookies.get('uTypeId')
    const handleClick = ()=>{
        
    }

    const [user, setUser] = useState();

const sendRequest = async () => {
  const res = await axios
    .get(`http://localhost:5000/api/department/getByCollgeId/${CollegeId}`)
    .catch((err) => console.log(err));
  const data = await res.data;
  console.log(data);
  console.log("-----");
  return data;
};


const [uni, setUni] = useState();

const sendRequest2 = async () => {
  const res = await axios
    .get(`http://localhost:5000/api/college/collegeId/${CollegeId}`)
    .catch((err) => console.log(err));
  const data = await res.data;
  console.log(data);
  console.log("-----");
  return data;
};


useEffect(() => {
    sendRequest().then((data) => setUser(data.departments));

    console.log(user);
   
    sendRequest2().then((data) => setUni(data.college));
    console.log("-----------+");
    console.log(uni);
  
  }, []);


    // const Fruits = [
    //     { name: 'Computer Engineering' },
    //     { name: 'Civil Engineering' },
    //     { name: 'Electrical Engineering' },
    //     { name: 'Electronics Engineering' },
    //     { name: 'Production Engineering' },
    //     { name: 'Electronics and Communication Engineering' },
    //     { name: 'Mechanical Engineering' },
    //     { name: 'Structural Engineering' }
    //   ];
  return ( 
    <>
    {
  UserType != 'College-admin'
  &&
  <Navigate to="/login" replace={true} />
}
    {user && 
    <div
    style={{
      display: "flex",
      textAlign: "center",
      justifyContent: "left",
      
    }}
  >
  <div style={{ display:"flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row",position:"sticky",top:"0",padding:"15px"}}>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="profile w-5 h-5">
            <img
              src="https://www.bvmengineering.ac.in/images/BVM%20Logo-1.png"
              className="w-110 h-110 rounded-circle"
              height="100px"
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              // marginTop: 50,
              marginLeft: 20,
              fontFamily: "poppins",
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "start",
            }}
          >
          {uni  && 
            uni.CName.substring(0,17)}..
          </div>

          <div
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#9B9B9B",
              fontWeight: "500",
            }}
          >{uni  && 
            uni.CollegeEmail}
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <div  style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

      {/* options */}
      <div className="editing" style={{position:"sticky",top:"130px",padding:"10px"}}>
      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegeprofile">
      <SideBarOption icon="person"  title="Profile" />
      </NavLink>
      
      <NavLink className="" style={{textDecoration:"none" ,color:"black" }} to="/collegedepartment">
      <SideBarOption icon="book" title="Department" />
      </NavLink>

      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegefaculty">
      <SideBarOption icon="groups" title="Faculty" />
      </NavLink>

      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegesubjects">
      <SideBarOption icon="groups" title="Subjects" />
      </NavLink>

      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/Logout">
         <SideBarOption icon="groups" title="Logout" />
         </NavLink>
     
     
     
      </div>
      
    </div>

    <div
    style={{
      border: "2px solid #F5F7F9",
      // height: "-webkit-fill-available",
      // marginTop: "auto",
      // marginBottom: "auto",
      marginLeft: 20,
    }}
  >
    {/* this is for line */}
  </div>
  

   {/* profile section */}
   <div
   style={{
     display: "flex",
     flexDirection: "column",
     marginRight: "auto",
     marginLeft: "auto",
     textAlign: "start",
     marginLeft: 40,
     width: "-webkit-fill-available",
   }}
 >
   <div
     style={{
       display: "flex",
       flexDirection: "column",
       marginTop: 20,
     }}
   >
     <div
       style={{
         fontFamily: "poppins",
         fontWeight: "600",
         fontSize: 26,
         marginLeft: 30,
       }}
     >
       Our Departments
     </div>
     <div
       style={{
         border: "2px solid #F5F7F9",
         marginLeft: "auto",
         marginRight: "auto",
         height: 1,
         marginTop: 5,
         width: "-webkit-fill-available",
       }}
     ></div>
   </div>
   
   <div>
   <div className='container'>
   <div className='row'>
   {user.map((data,index)=> (

    <div className='col-md-4'>
    <>
    
    <DeptCard
    key={index}
    title={data.DepartName}
    SubCardType="EDIT OR DELETE"
    /></>
    </div>
   ))}
   </div></div>
   
 </div>
<div className='' style={{paddingBottom:"30px"}}></div>
  <Pop/>
 
</div>


  </div>
}
   
</>
  )
}

export default UniDept