import React from "react";
import { Link } from "react-router-dom";
import "./CSS/ProjectDiv.css";

export default function ProjectDiv(props) {
  console.log(props);
  const project = props.project
  console.log(project);
  const tags = project.Tags
 
  return (
    <div className="main-div mt-3">
      <div className="col row">
        <div className="col-8">
          <Link to={{ pathname: `/viewProject/${project._id}` }}>

            <p className="title"> {project.PName}</p>

          </Link>

        </div>
        <div className="col-4">
          <span className="tag clg-Tag">{project.PType}</span>
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
        <div className="col-8 d-flex  justify-content-left">
          <span className="tag lan-Tag">{project.Tags}</span>
          {
            // project.languagesTag.map((element, index) => {
            //   return <span className="tag lan-Tag"> {element} </span>
            // })
          }
        </div>
        <div className="col-4">
          <span className="title">Author </span>
          <span className="tag auth-Tag">{project.UserId}</span>
        </div>
      </div>
    </div>
  );
}
