import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Search from "../Home/Search/Search";
import { Link } from "react-router-dom";
import ProjectDiv from "./ProjectDiv";
import Filter from "../Filter/Filter";
import ProjectCard from "../Profile/ProjectCard";
// import './Filter.css'

export default function ProjectMain() {
  const [projects, setProjects] = useState();
  const sendReq = async () => {
    const res = await axios
      .get("http://localhost:5000/api/project")
      .catch((err) => console.log(err));
    const data = await res.data;

    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      setProjects(data.projects);
    });
  }, []);

  useEffect(() => {
    let data = sessionStorage.getItem("searchinput");
    console.log("IN Project : " + data);
  });

  console.log(projects);
  return (
    <>
      <Header />
      <Search />
      <Filter />
      <div style={{ marginLeft: 20 }}>
        {projects &&
          projects.map((project, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: `/viewProject/${project._id}` }}
              state={{ projectDetails: project }}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
      </div>
    </>
  );
}
