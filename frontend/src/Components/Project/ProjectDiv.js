import React from 'react'
import './CSS/ProjectDiv.css'

export default function ProjectDiv() {
  return (
    <div>
     <div className='col row'>
      <div className='col-8'>
      <p className='titile' >Attendance management system using machine learning</p>
      </div>
     <div className='col-4'>
     <span>BVM</span>
     <span>4.3k</span>
     <span> <i className="fa fa-like"></i> </span>
     </div>
     
     </div>
      <p>There is an intrinsic positive relationship between classattendance and the performance of students in the academicenvironment. For the learning to occur more naturally, itis necessary
         to encourage presence and participation...</p>
    
    <div className='row'>
      <div className="col-8">
        <span>Machine learning</span>
        <span>Python</span>
      </div>
      <div className="col-4">
        <span>Author</span>
        <span>Khushi Patel</span>
      </div>
    </div>
    
    </div>
  )
}

