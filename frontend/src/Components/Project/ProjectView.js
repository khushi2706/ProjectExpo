import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { useParams, Link } from "react-router-dom";
import "./CSS/ProjectDiv.css";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import TagImage from "../../Assets/Images/Tags.svg";
import axios from "axios";
import Tag from "../Common/Tag";

export default function ProjectView(props) {
  const technologyTagStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 10,
    marginTop: 7,
  };

  const [user, setUser] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#2C5EFF");
  const idd = props.id;
  const { id } = useParams();

  const handleClickEvent = () => {
    if (isLiked == false) {
      console.log("we have clicked it");
      setIsLiked(true);
      setBackgroundColor("#2C5EFF");
      setTextColor("white");
    }
  };

  const sendRequestForUserName = async (userID) => {
    const res = await axios
      .get(`http://localhost:5000/api/student/getStudentById/${userID}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log("Student details: " + data);
    return data;
  };

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/Project/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    console.log("-----");
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.project));
    // sendRequestForUserName(user.UserId).then(user);
    console.log(user);
  }, []);

  return (
    <>
      {user && (
        <div>
          <Header />
          <div className="ccdd">
            <div className="leftt">
              <div className="texxt" style={{ textAlign: "left" }}>
                <Link
                  to={{ pathname: `/StudentProfile/${user.UserId}` }}
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                >
                  <span>Nikunj Patel</span>
                </Link>

                <span style={{ fontSize: 18, fontWeight: 400 }}>
                  Updated at {user.Date}..
                </span>
              </div>
              <div
                className=""
                style={{ textAlign: "left", marginLeft: "12px" }}
              >
                Prof :- Ankit Kausik
              </div>
            </div>
            <div
              className="rightt"
              style={{ background: { backgroundColor } }}
              onClick={handleClickEvent}
            >
              <div
                style={{
                  color: { textColor },

                  marginTop: "16px",
                }}
                className="rectangle"
              >
                <StarIcon style={{ color: textColor }} />
                Like
              </div>
            </div>
          </div>
          <hr className="horizontal-line"></hr>
          <div className="boxx">
            <div className="boxleft">
              <span
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  marginLeft: "30px",
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                {user.PName}
              </span>
              <span
                style={{
                  textAlign: "left",
                  fontSize: "21px",
                  marginLeft: "30px",
                  fontWeight: "500",
                }}
              >
                {user.Desc}...
              </span>
            </div>
            <div className="boxright">
              <div className="m-10 d-flex justify-content-left ">
                <img src={TagImage} alt="" className="tagImage" />
                <div
                  className="tagName"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginLeft: "7px",
                  }}
                >
                  Technology
                </div>
              </div>
              <div
                className="tagflex applydiv selectedtag"
                style={{ justifyContent: "flex-start" }}
              >
                {user.Tags.map((tagName, index) => {
                  return (
                    <>
                      <Tag title={tagName} customeStyle={technologyTagStyle} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row-container-cust" style={{ marginTop: 50 }}>
            <div className="heading-container">Student Profile : </div>

            <Link
              to={{ pathname: `/StudentProfile/${user.UserId}` }}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <div
                style={{
                  width: "220px",
                  border: "2px solid black",
                  marginLeft: "29px",
                  marginRight: "70px",
                }}
                className="rectangle"
              >
                <PersonIcon />
                Profile
              </div>
            </Link>
          </div>

          <div className="row-container-cust" style={{ marginTop: 50 }}>
            <div className="heading-container">
              Download project from here :{" "}
            </div>
            <div
              style={{
                width: "220px",
                border: "2px solid black",
                marginLeft: "29px",
                marginRight: "70px",
              }}
              className="rectangle"
            >
              <DownloadIcon />
              Download
            </div>
          </div>
        </div>
      )}
      <iframe src="D:\ProjectExpo\Backend\index.js" frameborder="0"></iframe>
    </>
  );
}
