import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Search from '../Home/Search/Search'
import ProjectDiv from './ProjectDiv'
import Filter from '../Filter/Filter' 
// import './Filter.css'

export default function ProjectMain() {

  const [projects , setProjects] = useState();
  const sendReq = async() => {
    const res = await axios
    .get("http://localhost:5000/api/project")
    .catch((err) => console.log(err));
    const data = await res.data;

    console.log(data);
    return data;
  }

  useEffect(() =>{
    sendReq().then((data) =>{
      setProjects(data.projects);
    });
  },[]);

  useEffect(() => {
        
    let data = sessionStorage.getItem("searchinput"); 
    console.log("IN Project : "+data); 

  }) ; 

  console.log(projects);
  return (
    <>
    <Header/>
    <Search/>
    <Filter/>
    <div className="d-flex row mt-5 justify-content-center w-100">
    {projects &&
        projects.map((project, index) => (
      <ProjectDiv
      key = {index}
      id = {project._id}
      project = {project}
      />
        ))}
    </div>
    </>
  )
}
