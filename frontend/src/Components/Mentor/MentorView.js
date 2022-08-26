import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import  './CSS/mentorCss.css'
import { useParams } from 'react-router-dom'
export default function MentorView() {

  
  const [ mentor , setMentor ] = useState();
  const id = useParams().id;
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
  console.log(mentor);
  return (
    <>
     <Header/>
     {      mentor && 

      <div>
      <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
          <div className="row g-0">
            <div
              className="col-md-4 gradient-custom text-center text-white"
              style={{
                borderTopLeftRadius: ".5rem",
                borderBottomLeftRadius: ".5rem"
              }}
            >
              
                  <img
                    src={mentor.MentorImg}
                    className="w-110 h-110 mt-5 rounded-circle"
                    style={{ width: 70, height: 70 }}
                    height="100px"
            />
              <div className='mt-5'>
              <h5>{mentor.Name}</h5>
              <p>{mentor.Speciality}</p>
              <p>{mentor.TypeOfUser}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h3 style={{fontFamily: 'poppins', fontWeight: 500}}>Information</h3>
                <hr className="mt-0 mb-4" />
                <div className=" pt-1">
                  <div className="col-6 mb-3" style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{fontFamily: 'poppins', fontWeight: 500}}>Email </div>
                    <p style={{marginLeft: 20}} className="text-muted">{mentor.Email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{fontFamily: 'poppins', textAlign: 'center' , fontWeight: 500}}><p>Telegram</p></div>
                    <a href={mentor.TelegramId} className="text-muted">{mentor.TelegramId}</a>
                  </div>
                </div>
                <h6>About Mentor</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <p>
                  {mentor.aboutMentor} 
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!">
                    <i className="fab fa-facebook-f fa-lg me-3" />
                  </a>
                  <a href="#!">
                    <i className="fab fa-twitter fa-lg me-3" />
                  </a>
                  <a href="#!">
                    <i className="fab fa-linkedin fa-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
     }
    </>
  )
}
