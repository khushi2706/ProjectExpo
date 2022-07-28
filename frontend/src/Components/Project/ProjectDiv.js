import React from "react";
import "./CSS/ProjectDiv.css";

export default function ProjectDiv(props) {
  const project = props.project
  return (
    <div className="main-div mt-3">
      <div className="col row">
        <div className="col-8">
          <p className="title">
           {project.title}
          </p>
        </div>
        <div className="col-4">
          <span className="tag clg-Tag">BVM</span>
          <span>4.3k</span>
          <span>
            {" "}
            <i className="fa-solid fa-thumbs-up"></i>
          </span>
        </div>
      </div>
      <div className="text-left">
        <p className="text-left">
        {project.desc}
        </p>
      </div>
      <div className="row">
        <div className="col-8 d-flex  justify-content-left">
          <span className="tag lan-Tag">Machine learning</span>
          <span className="tag lan-Tag">Python</span>
        </div>
        <div className="col-4">
          <span className="title">Author </span>
          <span className="tag auth-Tag">Khushi Patel</span>
        </div>
      </div>
    </div>
  );
}
