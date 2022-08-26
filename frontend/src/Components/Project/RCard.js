import React from "react";
import { Link } from "react-router-dom";
import "./rcard.css";
import bvm_logo from "../../Assets/Images/BVM_logo.png";
import Tag from "../Common/Tag";
import Beginner from "../../Assets/Images/beginner.jpg";
import Intermediate from "../../Assets/Images/intermediate.jpg";
import Master from "../../Assets/Images/master.jpg";
import StarIcon from '@mui/icons-material/Star';

export default function RCard(props) {
  const student = props.student;
  const projectStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 10,
    marginTop: 10,
  };
  return (
    <div className="">
      {student && (
        <>
          <div
            style={{
              width: "17vw",

              textAlign: "center",
              boxShadow: "0px 0px 8px 1px #B5B5B5",
              marginLeft: 20,
              marginTop: 30,
              padding: 15,
              borderRadius: 15,
              fontFamily: "poppins",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justiftContent: "center",
              }}
            >
            <div style={{display: "flex", flexDirection: 'row',justifyContent:"center"}}>
            { <img style={{ boxShadow: "0px 0px 40px 10px rgba(199,199,199,1)", backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%'}} src={Beginner}/> }
          </div>
              <Link
                style={{ textDecoration: "none" }}

                to={{ pathname: `/StudentProfile/${props.id}` }}

              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 10,
                    color: "black",
                  }}
                >
                  {student.Fname + "Patel"}
                </div>
              </Link>
            </div>
            <div className="card-body">
              <div
                style={{
                  textAlign: "left",

                  height: "44%",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontFamily: "poppins",
                  fontSize: 15,
                }}
              >
                {student.AboutMe}
              </div>
             <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>
              <div className="row">
                <div
                  className="col-12 d-flex align-items-baseline justify-content-left "
                  style={{
                    flexDirection: "column",
                    marginTop: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    className="title"
                    style={{
                      fontSize: "15px",
                      marginLeft: "6px",
                      margin: "6px",
                      fontWeight:"500"
                    }}
                  >
                    SkillSet :{" "}
                  </span>

                  <div className="techflex">
                    {student.LanguageTag &&
                      student.LanguageTag.map((element, index) => {
                        return (
                          <Tag title={element} customeStyle={projectStyle} />
                        );
                      })}
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-12 d-flex align-items-baseline justify-content-left "
                    style={{
                      flexDirection: "column",
                      marginTop: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="title" style={{ fontWeight:"500", fontSize: "15px" }}>
                      Domain :{" "}
                    </span>

                    <Tag title={student.Skill} customeStyle={projectStyle} />
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-12 d-flex align-items-baseline flex-direction-column justify-content-left"
                    style={{
                      flexDirection: "column",
                      marginTop: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="title" style={{  fontWeight:"500",fontSize: "15px" }}>
                      Passing Year :{" "}
                    </span>
                    <Tag
                      title={student.PassOutYear}
                      customeStyle={projectStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
