import React from "react";
import { Link } from "react-router-dom";
import "./rcard.css";

export default function RCard(props) {
 
    const student = props.student
    
  return (
    <div className="">
    {student 
        && 
    <div className="container">
    <div className="row">
    <div className="main-div mt-3 col-md-12 col-sm-6">
    <div className=" row">
    <div className="col-8 ccc">
    <Link style={{textDecoration:"none"}} to={{ pathname: `/viewProject/${props.id}` }}>
      <p className="title"> {student.Fname}{" "}{student.Lname}</p>
       
      </Link>
      <span className="tag  clg-Tag" style={{paddingBottom:"4px"}}>Expert</span>
    </div>
    <div className="col-4 ccc1 mt-10" >
      
      <span className="tag">200</span>
      <span>
        {" "}
        <i className="fa-solid fa-thumbs-up"></i>
      </span>
    </div>
  </div>
  
  <div className="row">
    <div className="col-12 d-flex align-items-baseline justify-content-left" style={{marginTop:"12px"}}>
    <span className="title" style={{marginLeft:"6px",margin:"6px"}}>SkillSet : </span>
    <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> React </span>
    <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> Web </span>
    <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> Blockchain </span>
    <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> ML </span>
    <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> PHP </span>
    { student.LanguageTag &&
        student.LanguageTag.map((element, index) => {
          return <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> {element} </span>
        })
      }
     
    </div>
    
    
  </div>
  <div className="row">
    <div className="col-12 d-flex align-items-baseline justify-content-left" style={{marginTop:"12px"}}>
    <span className="title">Domain : </span>
    <span className="tag lan-Tag" style={{marginLeft:"6px",margin:"6px"}}> {student.Skill} </span>
    
      
     
    </div>
    
    
  </div>
    </div>
    </div>
    </div>
    }
    </div>
  );
}