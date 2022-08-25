import React,{useEffect,useState} from "react";
import Header from "../Common/Header";
import { useParams } from "react-router-dom";
import "./CSS/ProjectDiv.css";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import TagImage from "../../Assets/Images/Tags.svg";
import axios from "axios";

export default function ProjectView(props) {
  const [user, setUser] = useState();
 const idd=props.id;
 const { id } = useParams();
console.log(id);
  const sendRequest = async () => {
    const res = await axios
      .get(
        `http://localhost:5000/api/Project/${id}`
      )
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
  const likeProject = ()=>{
      sendReqLike().then((data)=>
      console.log(data)
      )
  }

  useEffect(() => {
    sendRequest().then((data) => setUser(data.project));
    console.log("-----------+");

    console.log(user);

    
  }, []);
  

  return (
    <>
    {user && 
      <div>
      <Header />
      <div className="ccdd">
        <div className="leftt">
          <div className="texxt" style={{ textAlign: "left" }}>
            <span>Nikunj Patel</span>
            <span>Updated at {user.Date}..</span>
          </div>
          <div className="" style={{ textAlign: "left", marginLeft: "12px" }}>
            Prof :- Mohsin Hasan
          </div>
        </div>
        <div className="rightt">
          <div
            style={{ color: "rgba(44, 94, 255, 1)", marginTop: "16px" }}
            className="rectangle"
            onClick={likeProject}
          >
            <StarIcon />
            Like
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
            Download 3.5MB
          </div>
        </div>
      </div>
      <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

      <div className="boxx">
      <div className="boxleft">
      <span style={{textAlign:"left",fontSize:"26px", marginLeft: "30px",marginBottom:"15px",fontWeight:"600"}}>{user.PName}</span>
      <span style={{textAlign:"left",fontSize:"21px",marginLeft: "30px",fontWeight:"500"}}>{user.Desc}...</span>
      </div>

      <div className="boxright">
      <div className="m-10 d-flex justify-content-left " >
      <img src={TagImage} alt="" className="tagImage" />
      <div className="tagName" style={{fontSize:"20px",fontWeight:"500",marginLeft:"7px"}}>Tag</div>
    </div>
      <div className="tagflex applydiv selectedtag">
      {user.Tags.map((college, index) => {
        return (
          <>
          <span className="tag lan-Tag">{college}</span>
          </>
        );
      })}
      <span className="tag lan-Tag">React</span>
      <span className="tag lan-Tag">Web</span>
      <span className="tag lan-Tag">2022</span>
      <span className="tag lan-Tag">DTU</span>
   
      </div>
      </div>
      </div>
    </div>
   }
   <iframe src="D:\ProjectExpo\Backend\index.js" frameborder="0"></iframe>
      
    </>
  );
}
