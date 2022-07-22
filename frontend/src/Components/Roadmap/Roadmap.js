import React,{ useEffect, useState }  from 'react'
import Header from '../Common/Header'
import Search from './Search/Search'
import RoadmapCard from './RoadmapCard'

export default function Roadmap() 
{
  const [roadmaps,setRoadmaps]= useState([]);
  useEffect(()=>{
   fetch("http://localhost:5000/api/roadmap")
   .then(res=>res.json())
   .then((data)=>{
    console.log(data.roadmaps);
    setRoadmaps({...data.roadmaps});
   })
 
},[]);
  return (
   <>
    <Header/>
    <Search/>
   <div className='container mt-3'>
    
       { 
       roadmaps &&
       Object.values([roadmaps]).map((item,index)=>{
        
          console.log(item)
        return( 
        <RoadmapCard key={index} 
          title = {item[0].title}
          desc = {item[0].desc}
          link = {item[0].link}
        />
        )

       
       })
       }
   </div>
   </>
  )
}
