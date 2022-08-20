import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MyProjects() {
  const location = useLocation();
  //const { from } = location.state;
  console.log(location.state.subject_id);
  let userId = "62f8c501311781049bda47b3";
  const [projects, setProjects] = useState();
  const sendReq = async () => {
    if (location.state.subject_id != undefined) {
      const res = await axios
        .get(
          `http://localhost:5000/api/Project/Subject/${location.state.subject_id}`
        )
        .catch((err) => console.log(err));

      const data = await res.data;
      console.log("BySubject: " + data);
      return data;
    }
    const res = await axios
      .get(`http://localhost:5000/api/Project/UserId/${userId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      setProjects(data.project);
      console.log(projects);
      console.log(data.project);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects &&
          projects.map((project, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: `/viewProject/${project._id}` }}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
      </div>
    </>
  );
}
