import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { useParams, Link } from "react-router-dom";
import "./CSS/ProjectDiv.css";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import TagImage from "../../Assets/Images/Tags.svg";
import axios from "axios";

import Tag from '../Common/Tag';

export default function ProjectView(props) {
  const technologyTagStyle = {
    backgroundColor: '#D5E3FE',
    color: "#2C5EFF",
    fontSize: 15,
    marginRight: 5,
    marginTop: 10
  }
  const [user, setUser] = useState();
 const idd=props.id;
 const { id } = useParams();
console.log(id);

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/Project/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    console.log("-----");
    return data;
  };

  const sendReqLike = async ()=>{
    const res = await axios
    .post(
      `http://localhost:5000/api/Project/addNewRate`,
      {
        projectId: id,
        RateTobeAdded : 1
    }
    ).catch((err) => console.log(err));
    const data = await res.data;

    return data;
  }

  const sendReqToDown = async()=>{
    const res = await axios.get(
      `http://localhost:5000/api/Project/download/${id}`
    ).catch((err) => console.log(err));
    const data = await res.data;

    return data;
  } 
  const likeProject = ()=>{
      sendReqLike().then((data)=>
      {console.log(data)
      window.location.reload()}
      )
  }

  const DownloadProject = () =>{
    sendReqToDown().then((data) =>{
      alert("Project Downloaded in your Downloaded Folder!")
    })
  }

  useEffect(() => {
    sendRequest().then((data) => setUser(data.project));
    // sendRequestForUserName(user.UserId).then(user);
    console.log(user);
  }, []);

  return (
    <>
    {user && 
      <div>
      <Header index="1" />
      <div className="ccdd">
        <div className="leftt">
      <span style={{textAlign:"left", marginLeft:"15px" ,fontSize:"26px", marginBottom:"15px",fontWeight:"600"}}>{user.PName}</span>

          <div className="texxt" style={{ color: "gray", textAlign: "left" }}>

          <Link style={{marginTop: 13, marginTop: 'auto', marginBottom: 'auto'}} to={{ pathname: `/StudentProfile/${user.UserId}` }}><span style={{color: 'black',}}>Nikunj Patel</span></Link>

            
            <span style={{fontSize: 16, }}>Updated at {user.Date.substring(0,10) }</span>
          </div>
          <div className="" style={{ color: "gray" ,textAlign: "left", marginLeft: "12px" }}>
            Prof :- Mohsin Hasan
          </div>
        </div>
        <div className="rightt">
          <div
            style={{ color: "rgba(44, 94, 255, 1)", paddingLeft: 15, paddingRight: 15 ,marginTop: "16px" ,marginRight : "15px" }}
            className="rectangle"
            onClick={likeProject}
          >
            <StarIcon />
            {user.Rating}
          </div>
          <div
            style={{ color: "rgba(44, 94, 255, 1)", marginTop: "16px" ,marginRight : "15px", paddingLeft: 15, paddingRight: 15 }}
            className="rectangle"
            onClick={likeProject}
          >
            Plgarism {user.PlagRate} %
          </div>

        
        </div>
      </div>
      <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

      <div className="boxx">
      <div className="boxleft">
      <span style={{textAlign:"left",fontSize:"21px",marginLeft: "30px",fontWeight:"500"}}>{user.Desc}...</span>
      </div>

      <div
          style={{
            border: "2px solid #F5F7F9",
            // height: "-webkit-fill-available",
            // marginTop: "auto",
            // marginBottom: "auto",
            marginLeft: 20,
          }}
        >
          {/* this is for line */}
        </div>

      <div className="boxright" style={{marginLeft: 10}}>
      <div className="m-10 d-flex justify-content-left " >
      <img src={TagImage} alt="" className="tagImage" />
      <div className="tagName" style={{fontSize:"20px",fontWeight:"500",marginLeft:"7px"}}>Technology</div>
    </div>
      <div className="tagflex applydiv selectedtag" style={{justifyContent: 'flex-start'}} >
      {user.Tags.map((tag, index) => {
        return (
          <>
          <Tag title={tag} customeStyle={technologyTagStyle}/>
          </>
        );
      })}
   
      </div>
      </div>
      </div>
      <div
            style={{
              width: "220px",
              border: "2px solid black",
              marginLeft: "29px",
              marginRight: "70px",
              marginTop: "16px",
            }}
            className="rectangle"
          >
            <DownloadIcon />
         <a onClick={DownloadProject}>Download</a>   
          </div>
    </div>
   }
 
    </>
  );
}
