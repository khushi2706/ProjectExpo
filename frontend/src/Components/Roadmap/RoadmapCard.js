import React from "react";
import { Link } from "react-router-dom";
export default function RoadmapCard(props) {
  const rp = props.rp;
  return (
    <>
      <div id={props.id} className="card col-md-4 m-3" style={{ width: "18rem" }}>
        <img src={rp.ImgLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
          <Link to={{ pathname:`/viewRoadmap/${rp._id}` }}>
             {rp.title}
             </Link>
            </h5>
          <p className="card-text">{rp.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
