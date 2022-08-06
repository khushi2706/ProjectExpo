import React from "react";
import { Link } from "react-router-dom";
//import "./CSS/MentorDiv.css";

export default function MentorDiv(props) {
  const mentor = props.mentor;
  const tags = mentor.languagesTag;
  console.log(typeof tags);
  return (
    <div className="card col-md-4 m-3">
      <div className="card-body">
        <div className="card-title">
          <Link to={{ pathname: `/viewmentor/${mentor._id}` }}>
            <p className="title"> {mentor.Name}</p>
          </Link>
        </div>
        <div className="card-text">
          <span className="tag clg-Tag">{mentor.Speciality}</span>
        </div>
      </div>
      <div className="card-text">
        <p className="text-left">{mentor.aboutMentor}</p>
      </div>
    </div>
  );
}
