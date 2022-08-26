import React from "react";
import { Link } from "react-router-dom";
import "./rcard.css";
import bvm_logo from '../../Assets/Images/BVM_logo.png'

export default function RCard(props) {
 
    const student = props.student
    
  return (
    <div className="">
    
    {student 
        && 
        <>
        
        <div style={{width: '17vw', 
                        
                        textAlign: 'center', 
                        boxShadow: "0px 0px 8px 1px #B5B5B5",
                        marginLeft: 20,
                        marginTop: 30,
                        padding: 15,
                        borderRadius: 15,
                        fontFamily: 'poppins',
                        flexWrap: 'wrap'}}>
                        <div style={{display:"flex",flexDirection:"column",justiftContent:"center"}}>
                <img src={bvm_logo} style={{ alignItems:"center",margin:"auto"}} width="84vw" height="84vh"/>
                <Link style={{textDecoration:"none"}} to={{ pathname: `/viewProject/${props.id}` }}>
                <div style={{textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginTop: 10,
                        color:"black"}}>
                            {student.Fname}{" "}{student.Lname}
                </div>
                </Link>
                </div>
                <div className="card-body">
               
  <div className="row">
  <div className="col-12 d-flex align-items-baseline justify-content-left " style={{flexDirection:"column",marginTop:"12px",flexWrap:"wrap"}}>
  <span className="title" style={{fontSize:"15px",marginLeft:"6px",margin:"6px"}}>SkillSet : </span>
 <div className="techflex">
 <span className="tag lan-Tag" style={{fontSize:"15px",marginLeft:"6px",margin:"6px",marginTop:"6px"}}> React </span>

 <span className="tag lan-Tag" style={{fontSize:"15px",marginLeft:"6px",margin:"6px",marginTop:"6px"}}> Blockchain </span>
 <span className="tag lan-Tag" style={{fontSize:"15px",marginLeft:"6px",margin:"6px",marginTop:"6px"}}> ML </span>
 { student.LanguageTag &&
     student.LanguageTag.map((element, index) => {
       return <span className="tag lan-Tag" style={{fontSize:"15px",marginLeft:"6px",margin:"6px",marginTop:"6px"}}> {element} </span>
     })
   }</div>
   
  </div>
  
                
  
  
    <div className="row">
    <div className="col-12 d-flex align-items-baseline justify-content-left " style={{flexDirection:"column",marginTop:"12px",flexWrap:"wrap"}}>
    <span className="title" style={{fontSize:"15px"}}>Domain : </span>
    <span className="tag lan-Tag" style={{fontSize:"15px",marginLeft:"6px",margin:"6px"}}> {student.Skill} </span>
    
      
     
    </div>
    
    
  </div>
  
  <div className="row">
  <div className="col-12 d-flex align-items-baseline flex-direction-column justify-content-left" style={{flexDirection:"column",marginTop:"12px",flexWrap:"wrap"}}>
  <span className="title" style={{fontSize:"15px"}}>Passing Year : </span>
  <span className="tag lan-Tag" style={{fontSize:"15px",marginLeft:"6px",margin:"6px"}}> {student.PassOutYear} </span>
  
    
   
  </div>
  
  
</div>

              </div>            
            </div>


    </div>
    </>
    }
    </div>
  );
}