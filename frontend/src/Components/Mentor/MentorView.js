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
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar"
                className="img-fluid my-5"
                style={{ width: 80 }}
              />
              <h5>{mentor.Name}</h5>
              <p>{mentor.Speciality}</p>
              <p>{mentor.TypeOfUser}</p>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{mentor.Contact}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">123 456 789</p>
                  </div>
                </div>
                <h6>About Mentor</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <p>

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
                    <i className="fab fa-instagram fa-lg" />
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
