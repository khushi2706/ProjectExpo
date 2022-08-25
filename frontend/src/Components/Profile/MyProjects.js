import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MyProjects(props) {
  const location = useLocation();
  //const { from } = location.state;
  if (location.state != null) {
    console.log(location.state.subject_id);
  } else console.log("subject_id is undefined");
  const [projects, setProjects] = useState();

  const cookies = new Cookies();
  const UserType = cookies.get("userType");

  const userId = cookies.get("userId");
  console.log(userId);
  const sendReq = async () => {
    if (props.subject_id != null) {
      console.log("We are going to show professor project");
      const res = await axios
        .get(
          `http://localhost:5000/api/Project/Subject/${location.state.subject_id}`
        )
        .catch((err) => console.log(err));

      const data = await res.data;
      console.log("BySubject: " + data);
      return data;
    }
    console.log("We are going to show student's project");
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
