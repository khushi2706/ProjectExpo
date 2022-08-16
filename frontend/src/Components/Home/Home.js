import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Search from '../Home/Search/Search'


export default function Home() {

  const projectArray = []
  const idArray = []
  const [projects, setProjects] = useState();
  const sendReq = async (myId) => {
    const res = await axios
      .get(`http://localhost:5000/api/project/${myId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  }

  useEffect(() => {
    idArray.forEach(myID => {
      // console.log(myID)
      sendReq(myID).then((data) => {
        // setProjects(data.projects);
        projectArray.push(data)
        // console.log(data)

      });
    });

  }, []);

  console.log(projectArray);
  return (
    <>
      <Header />
      <div className="container-search-box-title">Find, learn and grow</div>
      <Search title="Search Project..." />

      <div>
        {/* <ProjectDiv
          key={index}
          id={project._id}
          project={project}
        /> */}
      </div>
    </>
  )
}
