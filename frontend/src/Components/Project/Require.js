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
  const [domain, setDomain] = useState("");
  const [year, setYear] = useState("");
  const [lang, setLang] = useState("");
  const yearlist = [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2014",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "202",
    "2028",
  ];

  let skillset = [
    "Frontend",
    "Full Stack",
    "Backend",
    "DataBase",
    "ML",
    "Data Science",
    "UI/UX",
    "DevOps",
    "OA",
    "Testing",
  ];

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

  const [searchinput, searchinputUpdate] = useState("");
  const filter2 = () => {
    let temp = [...projects];

    if (searchinput != "") {
      temp = temp.filter((ele) => {
        return ele.Fname.toLowerCase().includes(searchinput.toLowerCase());
      });
    }

    if (tagList != "" && lang != "") {
      temp = temp.filter((ele) => {
        return ele.LanguageTag.includes(lang);
      });
    }

    if (domain != "") {
      console.log(domain);
      temp = temp.filter((ele) => {
        return ele.Skill === domain;
      });
    }

    if (tagList != "" && timeframe != "") {
      alert("time");
      temp = temp.filter((ele) => {
        return ele.PassOutYear === timeframe;
      });
    }

    console.log(temp);
    setProjects(temp);

    // sessionStorage.setItem('searchinput', searchinput);
    // setFlag("true");
  };

  const [tag, setTag] = useState("");
  //   const [lang,setLang]=useState("");
  const [timeframe, setTimeFrame] = useState("");
  const [university, setUniversity] = useState("");
  const [tagList, setTaglist] = useState([]);
  const setToTaglist = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist([...tagList, k]);
      e.target.value = "";
    }
  };

  return (
    <>
      <Header index="3" />
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
      <div className="flexforfilter">
        <div className="a_fillter">
          <p style={{fontFamily:"poppins"}}>Applied Fillter</p>
          <div className="tags">
            {tagList.map((ele) => {
              return (
                <div className="tag">
                  <p>{ele}</p>
                  {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="short_filter">
          <div className="title">
            <img src={"img/Vector.png"} alt="short icon" />
            <p>Short Filters</p>
          </div>
          <div className="filter_container">
            <div className="filters">
              <div className="tag">
                <label htmlFor="language">
                  <img src={"img/Code.png"} alt="Code" />
                  <p>Language</p>
                </label>
                <div
                  className="sign-in-input-field-container"
                  style={{ marginTop: 15 }}
                >
                  <input
                   
                    className="sign-in-input-fields"
                    type="text"
                  placeholder="Ex.Java"
                  name="language"
                  id="language"
                  onKeyUp={(e) => setToTaglist(e, lang)}
                  onChange={(e) => setLang(e.target.value)}
                  />
                </div>
                
              </div>

              <div className="tag">
                <label htmlFor="timeframe">
                  <img src={"img/time.png"} alt="tag" />
                  <p>Passing Year</p>
                </label>
              <>  
                <div
                  className="sign-in-input-field-container"
                  style={{ marginTop: 15 }}
                >
                  <input
                   
                    className="sign-in-input-fields"
                    type="text"
                  placeholder="Ex.2002"
                  name="timeframe"
                  id="timeframe"
                  onKeyUp={(e) => setToTaglist(e, timeframe)}
                  onChange={(e) => setTimeFrame(e.target.value)}
                  />
                </div>
                </>
              </div>

              <div
                className="tagListOption tagflex"
                style={{ marginTop: "-24px" }}
              >
                <div>
                  <img src={TagImage} alt="" className="tagImage" />
                  <div className="tagName">Skillset</div>
                </div>
                <div className="sign-in-input-field-container" id="form">
                  <select
                    style={{}}
                    name="Skill"
                    onChnage={(e) => setDomain(e.target.value)}
                    id=""
                  >
                    <option value=" ">Select Your Domain </option>
                    {skillset.map((dp, idx) => {
                      return <option value={dp}>{dp}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex row mt-5 justify-content-center w-100">
            {projects &&
              projects.map((student, index) => (
                <div className="col-md-3">
                  <RCard key={index} id={student._id} student={student} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
