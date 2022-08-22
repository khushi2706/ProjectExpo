import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Search from '../Home/Search/Search'
import ProjectDiv from "../Project/ProjectDiv"

export default function Home() {

  var [projectArray , setProjectArray] = useState([]);
  const [idArray , setIdArray] = useState();
  const [projects, setProjects] = useState();

  const [searchinput, searchinputUpdate] = useState("");
  
  const getSearch = async()=>{
    const res = await axios.get(`http://localhost:5000/api/Project/serach/${searchinput}`)
    .catch((err)=>{console.log(err)})
  
    const data = await res.data;

    return data.projects;
  }
  const searchfunc = () => {
    console.log(searchinput);
    if(searchinput == "") {
        alert("Please Insert Input");
    }

    console.log(searchinput);
    getSearch().then((data)=>{
      data.forEach((d)=>{
        setProjectArray(d);
      })
    })

    console.log("-");
    console.log(projectArray);
  }
  setProjectArray = (data)=>{
    projectArray.push(data);
  }
  const getIds = async()=>{
    const res = await axios
    .get(`http://localhost:5000/api/recommendedProject`)
    .catch((err) => console.log(err));
  const data = await res.data;
  console.log("------------");
  console.log(data);
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
      console.log(idArray);
      idArray.forEach(myID => {
         sendReq(myID).then((data) => {
           setProjectArray(data);
         });
      });
    })
  }, []);
  return (
    <>
      <Header />
      <div className="container-search-box-title">Find, learn and grow</div>
      <div style={{ width: "100%" }}>
            <div style={{ paddingLeft: 40, paddingRight: 40, justifyContent: "left" }}>
                
                <div style={{ marginTop: 40 }} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    {/*search bar*/}
                    <div className="container-serach-box-search-bar" style={{ width: "80%" }}>
                        <i
                            className="material-icons"
                            style={{ marginLeft: 10, fontSize: 28, color: "#9B9B9B" }}
                        >
                            search
                        </i>
                        <div style={{ paddingLeft: 20 }} />
                        <input
                            type="text"
                            className="search-bar-input-box"
                            placeholder="Enter the project"
                            value={searchinput}
                            onChange={e =>searchinputUpdate(e.target.value)}
                        />
                    </div>

                    {/*Search button*/}
                    <button className="search-bar-button" id='searchinput' onClick={searchfunc}>Search</button>
                     
                </div>   
            </div>
        </div>

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
