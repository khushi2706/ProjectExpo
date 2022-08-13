
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

function UniDept() {
    const handleClick = ()=>{
        
    }
    const Fruits = [
        { name: 'Computer Engineering' },
        { name: 'Civil Engineering' },
        { name: 'Electrical Engineering' },
        { name: 'Electronics Engineering' },
        { name: 'Production Engineering' },
        { name: 'Electronics and Communication Engineering' },
        { name: 'Mechanical Engineering' },
        { name: 'Structural Engineering' }
      ];
  return (
    <div
    style={{
      display: "flex",
      textAlign: "center",
      justifyContent: "left",
      paddingTop: "20px",
      paddingLeft: "20px",
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
            Birla Vishwakarma..
          </div>

          <div
            style={{
              marginLeft: 20,
              fontSize: 16,
              color: "#9B9B9B",
              fontWeight: "500",
            }}
          >
            bvmengineering@bvm..
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

      {/* options */}
      <div style={{position:"sticky",top:"130px",padding:"10px"}}>
      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/universityprofile">
      <SideBarOption icon="person"  title="Profile" />
      </NavLink>
      
      <NavLink className="" style={{textDecoration:"none" ,color:"black" }} to="/universitydepartment">
      <SideBarOption icon="book" title="Department" />
      </NavLink>

      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/universityfaculty">
      <SideBarOption icon="groups" title="Faculty" />
      </NavLink>

      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/unversitysubjects">
      <SideBarOption icon="groups" title="Subjects" />
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
   {Fruits.map(data => (
    <div className='col-md-4'>
    <DeptCard
    title={data.name}
    SubCardType="EDIT OR DELETE"
    /></div>
   ))}
   </div></div>
   
 </div>
<div className='' style={{paddingBottom:"30px"}}></div>
  
<div
style={{
  marginTop: 20,
  justifyContent: "end",

  display:"flex",
  marginBottom:"50px",
  marginRight:"20px"
}}
>
<Button title={"+ Add Department"} onClick={handleClick}/>
</div> 
</div>


  </div>
   

  )
}

export default UniDept