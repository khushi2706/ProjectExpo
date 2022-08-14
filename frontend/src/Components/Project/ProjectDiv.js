import React from "react";
import { Link } from "react-router-dom";
import "./CSS/ProjectDiv.css";

export default function ProjectDiv(props) {
  const project = props.project
  const tags = project.languagesTag
  // console.log(typeof (tags));
  return (
    <div className="main-div mt-3">
      <div className="col row">
        <div className="col-8">
          <Link to={{ pathname: `/viewProject/${project._id}` }}>

            <p className="title"> {project.Title}</p>

          </Link>

        </div>
        <div className="col-4">
          <span className="tag clg-Tag">{project.University}</span>
          <span>{project.likes}</span>
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
          {
            project.languagesTag.map((element, index) => {
              return <span className="tag lan-Tag"> {element} </span>
            })
          }
        </div>
        <div className="col-4">
          <span className="title">Author </span>
          <span className="tag auth-Tag">{project.Author}</span>
        </div>
      </div>
    </div>
  );
}
