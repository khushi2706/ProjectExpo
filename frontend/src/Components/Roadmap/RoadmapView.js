import React, { useEffect, useState } from "react";
import Header from '../Common/Header'
import { useParams } from 'react-router-dom'
import './roadmap.css' 
import axios from "axios";

export default function  RoadmapView() {
    const [roadmap , setRoadmap ] = useState();
    const id = useParams().id;
    console.log(id);

    const fetchDetails = async () =>{
        const res = await axios
        .get(`http://localhost:5000/api/roadmap/view/${id}`)
        .catch((err) => console.log(err));
        return res.data;
    }

    useEffect(() => {
        fetchDetails().then((data) => {
        setRoadmap(data.roadmap);
          console.log(data);

        });
      }, [id]);

      console.log(roadmap);
  return (
    <>
    <Header/>
   

    {
      roadmap && 
      
      <div className="mainDiv container mt-4">
      <h1 className="text-left"> {roadmap.title} </h1>
      <p>
          {roadmap.desc}
      </p>
       <div className="container mt-3 row text-center">
       <iframe
        src={roadmap.RoadmapLink}
        frameBorder="0"
        scrolling="auto"
        height="800px"
        width="800px"
      ></iframe>
       </div>
      </div>


    }
      

    </>
  )
}

