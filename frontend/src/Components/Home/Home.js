import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Search from '../Home/Search/Search'
// import ProjectDiv from './Project/ProjectDiv'

// let myjson;
// const spawn = require("child_process").spawn;

// const pythoneProcess = spawn('python', ["Recommendation.py"]);

// pythoneProcess.stdout.on('data', (data) => {
//   const str = data.toString();

//   myjson = JSON.parse(str);
//   // console.log(myjson);
// });


export default function Home() {

  const projectArray = []
  const idArray = myjson
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
