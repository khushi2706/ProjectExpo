import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Search from '../Home/Search/Search'
import ProjectDiv from "../Project/ProjectDiv"

export default function Home() {

  var [projectArray , setProjectArray] = useState([]);
  const [idArray , setIdArray] = useState();
  const [projects, setProjects] = useState();

  setProjectArray = (data)=>{
    projectArray.push(data);
  }
  const getIds = async()=>{
    const res = await axios
    .get(`http://localhost:5000/api/recommendedProject`)
    .catch((err) => console.log(err));
  const data = await res.data;
  return data.projectId;
  }

  const sendReq = async (myId) => {
    const res = await axios
      .get(`http://localhost:5000/api/project/${myId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data.project;
  }

  useEffect(() => {

    getIds().then((data)=>{
      setIdArray(data);
      idArray.forEach(myID => {
         sendReq(myID).then((data) => {
           setProjectArray(data);
         });
      });
    })



  }, []);
console.log(projectArray);
  return (
    <>
      <Header />
      <div className="container-search-box-title">Find, learn and grow</div>
      <Search title="Search Project..." />

<div className="container">
{
  projectArray && projectArray.map((project,index)=>{
    return(
      <>
      <ProjectDiv
          key={index}
          id={project._id}
          project={project}
        />
      </>
    )
  })
}
</div>
    </>
  )
}
