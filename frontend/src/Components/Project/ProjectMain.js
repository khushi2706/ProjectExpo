import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";

import ProjectCard from '../Profile/ProjectCard';
import "./CSS/ProjectDiv.css"

import "../Filter/Filter.css";
import { Link } from "react-router-dom";


// import './Filter.css'

export default function ProjectMain() {
  const [isHandi, setishan] = useState(false);


  const [projects, setProjects] = useState();
  const [search, setsearch] = useState();
  const sendReq = async () => {
    const res = await axios
      .get("http://localhost:5000/api/project")
      .catch((err) => console.log(err));
    const data = await res.data;

    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      setProjects(data.projects);
    });
  }, []);

  const [category, setcategory] = useState("all");
  const [searchinput, searchinputUpdate] = useState("");
  const filter2 = () => {
    let temp = [...projects];

    if (searchinput != "") {
      temp = temp.filter((ele) => {
        return ele.PName.toLowerCase().includes(searchinput.toLowerCase());
      });
    }

    if (tagList != "" && tag != "") {
      temp = temp.filter((ele) => {
        return ele.Tags.includes(tag);
      });
    }

    if (tagList != "" && lang != "") {
    
      temp = temp.filter((ele) => {
        return ele.Tags.includes(lang);
      });
    }

    if (tagList != "" && timeframe != "") {
     
      temp = temp.filter((ele) => {
        console.log(ele.Date.getFullYear);
        return ele.Date.getFullYear === timeframe;
      });
    }

    console.log("---r---");
    console.log(temp);
    setProjects(temp);

    // sessionStorage.setItem('searchinput', searchinput);
    // setFlag("true");
  };

  const [tag, setTag] = useState("");
  const [lang, setLang] = useState("");
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
      <Header />
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

          <p  className="tag" style={{fontSize:"25px"}}>Applied Fillter</p>
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
                <label htmlFor="tag">
                  <img src={"img/Tags.png"} alt="tag" />
                  <p>Tag</p>
                </label>
                <div
                  className="sign-in-input-field-container"
                  style={{ marginTop: 15 }}
                >
                  <input
                    className="sign-in-input-fields"
                    type="text"
                  placeholder="Ex.Web"
                  name="tag"
                  id="tag"
                  onKeyUp={(e) => setToTaglist(e, tag)}
                  onChange={(e) => setTag(e.target.value)}
                  />
                </div>
               
              </div>
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
                  <p>Time Frame</p>
                </label>
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
          
              </div>
              <div className="tag">
                <label htmlFor="University">
                  <img src={"img/University.png"} alt="University" />
                  <p>University</p>
                </label>
                <div
                className="sign-in-input-field-container"
                style={{ marginTop: 15 }}
              >
                <input
                  className="sign-in-input-fields"
                  type="text"
                  placeholder="Ex.BVM"
                  name="University"
                  id="University"
                  onKeyUp={(e) => setToTaglist(e, university)}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </div>
             
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-5 justify-content-center" style={{marginLeft: 30}}>
        {projects &&
          projects.map((project, index) => (
            <Link to={{ pathname: `/viewProject/${project._id}` }}><ProjectCard project={project} /></Link>
            
          ))}
      </div>
    </>
  );
}
