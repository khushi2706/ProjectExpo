import React,{ useEffect, useState }  from 'react'
import Header from '../Common/Header'
import Search from './Search/Search'
import axios from 'axios'
import RoadmapCard from './RoadmapCard'


export default function Roadmap() {
  const [roadmaps, setRoadmap] = useState();
  const sendRequest = async () =>{
    console.log("hey");
    const res = await axios
    .get("http://localhost:5000/api/roadmap")
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    console.log("hi");
    sendRequest().then((data) => setRoadmap(data.roadmap));
  }, []);

  console.log(roadmaps);
  return (
   <>
    <Header/>
    <Search/>
   <div className='container mt-3'>
        {
          roadmaps && roadmaps.map((roadmap,index) =>
         
          <RoadmapCard/>
          )

        }
   </div>
   </>
  )
}
