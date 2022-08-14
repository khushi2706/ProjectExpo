// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Header from '../Common/Header'
// import Search from '../Home/Search/Search'
// import ProjectDiv from './ProjectDiv'

// export default function ProjectMain() {

//   // const [projects, setProjects] = useState();
//   // const sendReq = async () => {
//   //   const res = await axios
//   //     .get("http://localhost:5000/api/project")
//   //     .catch((err) => console.log(err));
//   //   const data = await res.data;
//   //   console.log(data);
//   //   return data;
//   // }

//   // useEffect(() => {
//   //   sendReq().then((data) => {
//   //     setProjects(data.projects);
//   //   });
//   // }, []);
//   const spawn = require("child_process").spawn;

//   const pythoneProcess = spawn('python', ["Recommendation.py"]);

//   pythoneProcess.stdout.on('data', (data) => {
//     str = data.toString();

//     myjson = JSON.parse(str);
//     console.log(myjson);
//     return (
//       <>
//         <Header />
//         <Search />
//         <div className="d-flex row mt-5 justify-content-center w-100">
//           {myjson &&
//             myjson.map((project, index) => (
//               <ProjectDiv
//                 key={index}
//                 id={project._id}
//                 project={project}
//               />
//             ))}
//         </div>
//       </>
//     )
//   });

//   // console.log(projects);

// }
