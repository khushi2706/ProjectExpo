import React from "react";
import "./CSS/ProjectDiv.css";

export default function ProjectDiv() {
  return (
    <div className="main-div">
      <div className="col row">
        <div className="col-8">
          <p className="title">
            Attendance management system using machine learning
          </p>
        </div>
        <div className="col-4">
          <span className="tag clg-Tag">BVM</span>
          <span>4.3k</span>
          <span>
            {" "}
            <i class="fa-solid fa-thumbs-up"></i>
          </span>
        </div>
      </div>
      <div className="text-left">
        <p className="text-left">
          There is an intrinsic positive relationship between classattendance
          and the performance of students in the academicenvironment. For the
          learning to occur more naturally, itis necessary to encourage presence
          and participation...
        </p>
      </div>
      <div className="row">
        <div className="col-8">
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
