import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import Header from '../Common/Header';
import MentorDiv from './MentorDiv';
import Search from '../Home/Search/Search';
export default function Mentor() {


    const [mentors , setMentors] = useState();

    const sendReq = async() => {
        const res = await axios
        .get("http://localhost:5000/api/mentor/")
        .catch((err) => console.log(err));

        const data = await res.data;
        console.log(data);
        return data;
    }

    useEffect(() =>{
        sendReq().then((data) => {
            setMentors(data.Mentors);
        });
    },[]);

    console.log(mentors);
  return (
    <>
    <Header/>
    <Search/>
    <div className="d-flex row mt-5 justify-content-center w-100">
    {mentors &&
        mentors.map((mentor, index) => (
      <MentorDiv
      key = {index}
      id = {mentor._id}
      mentor = {mentor}
      />
        ))}
    </div>
    </>
  )
}
