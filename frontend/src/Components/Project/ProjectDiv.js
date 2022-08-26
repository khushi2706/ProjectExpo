import React from "react";
import { Link } from "react-router-dom";
import "./CSS/ProjectDiv.css";

export default function ProjectDiv(props) {
  console.log(props);
  const project = props.project
  console.log(project);
  const tags = project.Tags

  return (
    <div className="">
    <div className="container">
    <div className="row">
    <div className="main-div mt-3 p-3 col-md-12 col-sm-6">
    <div className=" row">
    <div className="col-8 ccc">
      <Link style={{textDecoration:"none"}} to={{ pathname: `/viewProject/${project._id}` }}>
      <p className="title"> {project.PName}</p>
       
      </Link>
      <span className="tag  clg-Tag" style={{paddingBottom:"4px"}}>{project.PType}</span>
    </div>
    <div className="col-4 ccc1 mt-10" >
      
      <span className="tag">{project.Rating}</span>
      <span>
        {" "}
        <i className="fa-solid fa-thumbs-up"></i>
      </span>
    </div>
  </div>
  <div className="text-left">
    <p className="text-left">
      {project.Desc}
    </p>
  </div>
  <div className="row">
    <div className="col-12 d-flex align-items-baseline justify-content-left">
    <span className="title">Tag : </span>
      
      {
        project.Tags.map((element, index) => {
          return <span className="tag lan-Tag"> {element} </span>
        })
      }
    </div>
    
  </div>
    </div>
    </div>
    </div>
    </div>
  );
}