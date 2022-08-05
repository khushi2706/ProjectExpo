import React from "react";
import { Link } from "react-router-dom";
//import "./CSS/MentorDiv.css";

export default function MentorDiv(props) {
  const mentor = props.mentor;
  const tags = mentor.languagesTag;
  console.log(typeof tags);
  return (
    <div className="main-div mt-3">
      <div className="col row">
        <div className="col-8">
          <Link to={{ pathname: `/viewmentor/${mentor._id}` }}>
            <p className="title"> {mentor.Name}</p>
          </Link>
        </div>
        <div className="col-4">
          <span className="tag clg-Tag">{mentor.Speciality}</span>
        </div>
      </div>
      <div className="text-left">
        <p className="text-left">{mentor.aboutMentor}</p>
      </div>
    </div>
  );
}
