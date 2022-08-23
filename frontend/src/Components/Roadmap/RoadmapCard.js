import React from "react";
import { Link } from "react-router-dom";
import Tag from "../Common/Tag";
import "./RoadmapCard.css";
export default function RoadmapCard(props) {
  const rp = props.rp;
  console.log(rp.ImgLink);
  const customeStyle = {
    backgroundColor: "#FFF5DC",
  };
  return (
    <>
      <div
        id={props.id}
        className="main-container main-container-tag"
        style={{ width: "15rem" }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={rp.ImgLink} className="card-img-container" alt="..." />
        </div>
        <div>
          {/* <Link to={{ pathname: `/viewRoadmap/${rp._id}` }}>{rp.title}</Link> */}
          <div className="card-title-container">{rp.title}</div>
          <div className="card-owner-container">{rp.desc}</div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <Tag
                title="4.5 "
                customeStyle={customeStyle}
                isIcon="true"
                iconName="star"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
