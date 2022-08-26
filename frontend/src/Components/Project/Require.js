import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";

import ProjectDiv from "./ProjectDiv";
import Filterlist from "../../Assets/Images/Filter list.svg";
import "../Filter/Filter.css";
import TagImage from "../../Assets/Images/Tags.svg";
import CodeImage from "../../Assets/Images/Code.svg";
import calender from "../../Assets/Images/Calendar.svg";
import university from "../../Assets/Images/University.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import RCard from "./RCard";

// import './Filter.css'

export default function Require() {
  const [isHandi, setishan] = useState(false);
  const [projects, setProjects] = useState();
  const [search, setsearch] = useState();
  const [domain,setDomain] =  useState();
  const [year,setYear] = useState();
  const [lang,setLang]= useState();
  const yearlist = ['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2014','2018','2019','2020','2021','2022','2023','2024','2025','2026','202','2028']
  
  let skillset = ['Frontend','Full Stack','Backend','DataBase','ML','Data Science','UI/UX','DevOps','OA','Testing']
  
  const sendReq = async () => {
    const res = await axios
      .get("http://localhost:5000/api/student")
      .catch((err) => console.log(err));
    const data = await res.data;

    console.log(data);
    return data;
  };

  

  useEffect(() => {
    sendReq().then((data) => {
      setProjects(data.students);
      console.log(projects);
    });
  }, []);

 
  
  
  const [inputt, setInputt] = useState("");
  
  
  const [myskills,setmyskills] = useState([]);
  const addtag = () =>{
    if (myskills.includes(lang) == true) {
        setmyskills((prev) => [...prev, lang]);
      }
  };
  
  
 
  const [searchinput, searchinputUpdate] = useState("");
  const filter2 = () => {
  

    let temp = [...projects];

    if (searchinput != "") {
      temp = temp.filter((ele) => {
        return ele.PName.toLowerCase().includes(searchinput.toLowerCase());
      });
    }
console.log(inputt);
    if (inputt != "") {
      temp = temp.filter((ele) => {
       console.log(typeof(ele.Tags));
        return ele.Tags[0].includes(inputt);
      });
    }
  
    console.log(temp);
    setProjects(temp);

    // sessionStorage.setItem('searchinput', searchinput);
    // setFlag("true");
    alert("clicked");
  };
  

  return (
    <>
      <Header index="2" />
      <div style={{ width: "100%" }}>
        <div
          style={{ paddingLeft: 40, paddingRight: 40, justifyContent: "left" }}
        >
          <div style={{ marginTop: 40 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {/*search bar*/}
            <div
              className="container-serach-box-search-bar"
              style={{ width: "80%" }}
            >
              <i
                className="material-icons"
                style={{ marginLeft: 10, fontSize: 28, color: "#9B9B9B" }}
              >
                search
              </i>
              <div style={{ paddingLeft: 20 }} />
              <input
                type="text"
                className="search-bar-input-box"
                placeholder="search by name"
                value={searchinput}
                onChange={(e) => searchinputUpdate(e.target.value)}
              />
            </div>

            {/*Search button*/}
            <button
              className="search-bar-button"
              id="searchinput"
              onClick={filter2}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="AppliedFilter">
        <div className="applied"></div>
        <div className="filter">
          <div className="title">
            <img src={Filterlist} alt="" className="titleImage" />
            <div className="title_information">Short filters</div>
          </div>

          <div className="AlltagListOption alll">
            <div className="tagListOption tagflex">
              <div>
                <img src={TagImage} alt="" className="tagImage" />
                <div className="tagName">Skillset</div>
              </div>
              <div className="sign-in-input-field-container" id="form">
              <select style={{}} name="Skill" onChange={(e)=>{
                setDomain(e.target.value)
              }} id="">
                <option value=" ">Select Your Domain </option>
                {
                  skillset.map((dp, idx) => {
                    return <option value={dp}>{dp}</option>;
                  })}
              </select>
            </div>
  
            </div>

            
            <div className="tagListOption tagflex">
              <div>
                <img src={calender} className="tagImage" />
                <div className="tagName">Skills</div>
                
              </div>
              <div>
                <input
                  type="text"
                  className="inputfilter inputfil"
                  onChange={(e) => setLang(e.target.value)}
                  placeholder="Ex. React"
                />
              </div>
              
            </div>

            <div className="tagListOption tagflex">
              <div>
                <img src={CodeImage} className="tagImage" />
                <div className="tagName">Year</div>
              </div>
              <div className="sign-in-input-field-container" id="form">
              <select name="year" onChange={(e)=>{
                setYear(e.target.value)
              }} id="">
                <option value=" ">Select Candidate Passing Year </option>
                {
                  yearlist.map((dp, idx) => {
                    return <option value={dp}>{dp}</option>;
                  })}
              </select>
              
            </div>
            </div>

            <div className="tagflex applydiv">
              <button
                className="search-bar-button filterbtn"
                onClick={() => {
                 
                }}
                id=" "
              >
                Apply
              </button>
            </div>

            
          </div>
        </div>
      </div>

      <div className="d-flex row mt-5 justify-content-center w-100">
      {projects &&
        projects.map((student, index) => (
          <RCard key={index} id={student._id} student={student} />
        ))}
      <RCard/>
      <RCard/>
      <RCard/>
      <RCard/>
      <RCard/>
      <RCard/>


      </div>
    </>
  );
}
