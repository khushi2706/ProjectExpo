import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'

import { useParams } from 'react-router-dom'
export default function MentorView() {

  
  const [ mentor , setMentor ] = useState();
  const id = useParams.id;
  console.log(id);

  const fetchDetails = async () =>{
    const res = await axios
    .get(`http://localhost:5000/api/mentor/view/${id}`)
    .catch((err) => console.log(err))
    return res.data;
  }

  useEffect(() => {
    fetchDetails().then((data)=>{
      setMentor(data.mentor);
    })
  },[]);
  return (
    <>
     <Header/>
     {      mentor && 

      <div>
      <h1>{mentor.Name}</h1>
      </div>
     }
    </>
  )
}
