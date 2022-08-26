import React from "react";
import Tag from "../Common/Tag";
import "./ProjectCard.css";
import Ratings from "./Rating";
export default function ProjectCard(props) {
  const project = props.project;
  const visibilityStyle = {
    backgroundColor: "#D5F0E1",
    color: "#52B67D",
    fontSize: 15,
    fontWeight: "bold",
  };
  const projectStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 15,
    fontWeight: "bold",
  };
  return (
    <>
      <div className="card-container">
        <div className="project-row1-card">
          <div className="project-title">{project.PName}</div>
          <div className="project-row1-card">
            {/* <Tag title="BVM" customeStyle={myStyle} /> */}
            <div style={{ marginLeft: 20, marginTop: 2 }}>
              <Ratings ratingVal={project.Rating} />
            </div>
          </div>
        </div>
        <div className="description-container">{project.Desc}</div>
        <div
          className="project-row1-card"
          style={{ justifyContent: "space-between", marginTop: 10 }}
        >
          <div className="project-row1-card">
            {project.Tags.map((tag, index) =>
              index == 0 ? (
                <Tag title={tag} customeStyle={projectStyle} />
              ) : (
                <div style={{ marginLeft: 10 }}>
                  <Tag title="Python" customeStyle={projectStyle} />
                </div>
              )
            )}
          </div>
          <Tag
            title={project.isPrivate ? "Private" : "Public "}
            customeStyle={visibilityStyle}
          />
          {/* <Tag title="Machine Learning" customeStyle={projectStyle} />
          <div style={{ marginLeft: 10 }}>
            <Tag title="Python" customeStyle={projectStyle} />
          </div>
          <div style={{ marginLeft: 10 }}>
            <Tag title="CNN" customeStyle={projectStyle} />
          </div> */}
        </div>
      </div>
    </>
  );
}
