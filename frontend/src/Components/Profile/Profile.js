import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import axios from "axios";
import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";
import Beginner from "../../Assets/Images/beginner.jpg";
import Intermediate from "../../Assets/Images/intermediate.jpg";
import Master from "../../Assets/Images/master.jpg";
import StarIcon from '@mui/icons-material/Star';

export default function Profile() {
  
  const [singleUser, setSingleUser] = useState();
  const [rating, setRating] = useState();
  const cookies = new Cookies();
 const UserType = cookies.get('userType');
 const UserId = cookies.get('userId')
 const studentId = cookies.get('uTypeId')
  

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/student/getStudentById/${studentId}`)

      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    return data;
  };

  const sendReqForRating = async () => {
  
    const res = await axios
    .get(`http://localhost:5000/api/user/${UserId}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      console.log(data);
      setSingleUser(data);
      sendReqForRating().then((data) => {
        console.log(data.user[0].Rating);
        setRating(data.user[0].Rating);
      });
    });
  
  }, []);

  const changeDetails = async()=>{
    console.log("chnging");
    console.log(singleUser.LName);
    const res = await axios.put(
      `http://localhost:5000/api/student/changeDetails`,
      {
        "StudentId": studentId,
       "Fname": singleUser.Fname,
        "LName": singleUser.LName,
        "AboutMe" :singleUser.AboutMe,
        "DoB": singleUser.DoB,
        "Gender": singleUser.Gender,
      }
    )
    .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    window.location.href = "http://localhost:3000/myProfile"
    console.log(data);
  }
  const handlechange = (e) => {
    setSingleUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(singleUser);
  return (
    <>
    {
  UserType != 'Student'
  &&
  <Navigate to="/login" replace={true} />
}
      {singleUser && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <div
              style={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: 26,
                marginLeft: 30,
              }}
            >
              My Profile
            </div>
            <div
              style={{
                border: "2px solid #F5F7F9",
                marginLeft: "auto",
                marginRight: "auto",
                height: 1,
                marginTop: 5,
                width: "-webkit-fill-available",
              }}
            ></div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          First Name
        </div>
        <div>  {singleUser && (
          <input
            title={"First Name"}
            placeholder={"Ex: Nikunj"}
            value={singleUser.Fname}
            className="input-field"
            onChange={handlechange}
           name="Fname"
          />
        )}</div>
        </div>
              
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
         Last Name
        </div>
                <div style={{ marginLeft: 10 }}>
                  <input
                    title={"Last Name"}
                    placeholder={"Ex: Patel"}
                    value={singleUser.LName}
                    className="input-field"
                    onChange={handlechange}
                   name="LName"
                  />
                </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          About Me
        </div>
                 <div>
                 <input
                 title={"About Me"}
                 placeholder={"I AM student"}
                 value={singleUser.AboutMe}
                 className="input-field"
                 onChange={handlechange}
                name="AboutMe"
               /></div>
               </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          Gender
        </div>
                <div><input
                title={"Gender"}
                placeholder={"Ex: Male"}
                value={singleUser.Gender}
                className="input-field"
                  onChange={handlechange}
                 name="Gender"
              /></div>
              </div>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          DOB
        </div>
                <div style={{ marginLeft: 10 }}>
                  <input
                    title={"DOB"}
                    placeholder={"Ex: 31/10/2000"}
                    value={singleUser.DoB}
                    className="input-field"
                    onChange={handlechange}
                   name="DoB"
                  />
                </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          Passing Year
        </div>
                <div><input
                disabled
                title={"PassOutYear"}
                placeholder={"Ex: 2024"}
                value={singleUser.PassOutYear}
                className="input-field"
                  onChange={handlechange}
                 name="PassOutYear"
              /></div>
              </div>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          SkillSet
        </div>
                <div style={{ marginLeft: 10 }}>
                  <input
                    title={"Skill"}
                    placeholder={"Ex: Frontend"}
                    value={singleUser.Skill}
                    className="input-field"
                    onChange={handlechange}
                   name="Skill"
                  />
                </div>
                </div>
              </div>

              

              <div style={{ display: "flex", flexDirection: "row" }}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
         College Name
        </div>
                 <div>
                 <input
                 disabled
                 title={"About Me"}
                 placeholder={"I AM student"}
                 value={singleUser.CollegeName}
                 className="input-field"
                 onChange={handlechange}
                name="CollegeName"
               /></div>
               </div>
              </div>

              
              <div style={{ display: "flex", flexDirection: "row" }}>
              <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow:1
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
        Department Name
        </div>
                 <div>
                 <input
                 disabled
                 title={"About Me"}
                 placeholder={"I AM student"}
                 value={singleUser.DepartmentName}
                 className="input-field"
                 onChange={handlechange}
                name="DepartmentName"
               /></div>
               </div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  justifyContent: "end",
                }}
              >
                  <button
      className="search-bar-button"
      style={{ width: "fit-content", height: 50 }}
      onClick={changeDetails} 
    >Submit</button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontSize: 22,
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                Profile Picture
              </div>
              <div
                className="profile w-5 h-5"
                style={{ marginTop: 20, marginBottom: "auto" }}
              >
                <img
                  src={singleUser.ProfileImg}
                  className="w-110 h-110 rounded-circle"
                  height="300px"
                />
              </div>
              <div style={{ marginTop: 50 }}></div>
              <button
                style={{
                  width: "fit-content",
                  paddingLeft: 30,
                  paddingRight: 30,
                  marginBottom: "auto",
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                  height: 45,
                  borderColor: "#2C5EFF",
                  borderWidth: 1,
                  borderRadius: 5,
                  background: "#ffffff",
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
                }}
              >
                <div style={{}}>
                  <i
                    className="material-icons"
                    style={{
                      marginLeft: 10,
                      fontSize: 28,
                      color: "#2C5EFF",
                      paddingTop: 7,
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    edit
                  </i>
                </div>
                <div
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "#2C5EFF",
                    marginLeft: 10,
                  }}
                >
                  Edit Picture
                </div>
              </button>
              <div style={{fontFamily: 'poppins', fontWeight: 500, fontSize: 22}}>Level</div>
              
              <hr className="horizontal-line"></hr>
              
              <div style={{display: "flex", flexDirection: 'row'}}>
                {rating < 200 ? <img style={{ boxShadow: "0px 0px 40px 10px rgba(199,199,199,1)", backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%'}} src={Beginner}/> : rating > 700 ? <img src={Intermediate} style={{backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%'}}/> : <img src={Master} style={{backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%'}}/>}
                <div style={{display: "flex", flexDirection: "column", marginTop: 'auto', marginBottom: 'auto'}}>
                  <div style={{fontFamily: 'poppins', fontWeight: 500, marginTop: "auto", marginBottom: 'auto', marginLeft: 15, fontSize: 22}}>{rating < 200 ? "Beginner" : rating < 700 ? "Intermediate" : "Master"}</div>
                  
                  <div style={{ display: "flex", flexDirection: 'row', marginLeft: 13}}>
                    <StarIcon />
                    <div style={{fontFamily: 'poppins', marginLeft: 5, fontSize: 18,}}>{rating}</div>
                  </div>
                </div>
              </div>
              <div style={{marginTop: 70}}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}