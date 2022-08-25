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

  const tag = [];
  const lan = [];
  const uni = [];
  const time = [];
  const [list, setList] = useState(tag);
  const [list1, setList1] = useState(uni);

  const [list2, setList2] = useState(time);

  const [list3, setList3] = useState(lan);
  const cancell = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq = [...list];
    mq.splice(idd, 1);
    setList(mq);
  };

  const cancell1 = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq1 = [...list1];
    mq1.splice(idd, 1);
    setList1(mq1);
  };

  const cancell2 = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq2 = [...list2];
    mq2.splice(idd, 1);
    setList2(mq2);
  };

  const cancell3 = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq3 = [...list3];
    mq3.splice(idd, 1);
    setList1(mq3);
  };

  const [inputt, setInputt] = useState("");
  const [inputt1, setInputt1] = useState("");
  const [inputt2, setInputt2] = useState("");
  const [inputt3, setInputt3] = useState("");
  const [f1, setf1] = useState("false");
  const handleAdd = () => {
    if (list.includes(inputt) == false) {
      setList((prev) => [...prev, inputt]);
      setf1("true");
    }
    if (list1.includes(inputt1) == false) {
      setList1((prev) => [...prev, inputt1]);
    }
    if (list2.includes(inputt2) == false) {
      setList2((prev) => [...prev, inputt2]);
    }
    if (list3.includes(inputt3) == false) {
      setList3((prev) => [...prev, inputt3]);
    }
  };
  // useEffect(() => {

  // }) ;
  const [category, setcategory] = useState("all");
  const [searchinput, searchinputUpdate] = useState("");
  const filter2 = () => {
    if (list.includes(inputt) == false) {
      setList((prev) => [...prev, inputt]);
      setf1("true");
    }
    if (list1.includes(inputt1) == false) {
      setList1((prev) => [...prev, inputt1]);
    }
    if (list2.includes(inputt2) == false) {
      setList2((prev) => [...prev, inputt2]);
    }
    if (list3.includes(inputt3) == false) {
      setList3((prev) => [...prev, inputt3]);
    }

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
    // if (category != "all") {
    //   console.log("--c---");
    //   console.log(category);
    //   temp = temp.filter((ele) => {
    //     // console.log("+++");
    //     // console.log(ele.PType.toLowerCase());
    //     return ele.PType.toLowerCase() == category;
    //   });
    // }

    console.log("---r---");
    console.log(temp);
    setProjects(temp);

    // sessionStorage.setItem('searchinput', searchinput);
    // setFlag("true");
    alert("clicked");
  };
  const fff = () => {
    let t = [...projects];
console.log("jdjd"+t)
    if (inputt != "") {
      t = t.filter((ele) => {
        console.log(typeof(ele.Tags));
        ele.map((e,i)=>{
          return e.Tags.includes(inputt);
        })
       
      });
    }
    console.log("---r---");
    console.log(t);
    setProjects(t);

    // sessionStorage.setItem('searchinput', searchinput);
    // setFlag("true");
    alert("clicked 2");
  };

  console.log(projects);
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
                <div className="tagName">Tag</div>
              </div>
              <div>
                <input
                  type="text"
                  className="inputfilter inputfil"
                  onChange={(e) => setInputt(e.target.value)}
                  placeholder="Ex. Web"
                />
              </div>
            </div>

            <div className="tagListOption tagflex">
              <div>
                <img src={university} alt="" className="tagImage" />
                <div className="tagName">Type</div>
              </div>
              <div>
                <div
                  style={{
                    color: "#808080",
                    fontFamily: "poppins",
                    fontWeight: "600",
                  }}
                >
                  <div className="sign-in-input-field-container">
                    <select
                      className="select chg"
                      onChange={(e) => {
                        setInputt1(e.target.value);
                        setcategory(e.target.value.toLowerCase());
                        console.log(category);
                      }}
                      name="typeid"
                    >
                      <option>Select</option>
                      <option>Software</option>
                      <option>Hardware</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="tagListOption tagflex">
              <div>
                <img src={calender} className="tagImage" />
                <div className="tagName">Time Frame</div>
              </div>
              <div>
                <input
                  type="text"
                  className="inputfilter inputfil"
                  onChange={(e) => setInputt2(e.target.value)}
                  placeholder="Ex. 2020"
                />
              </div>
            </div>

            <div className="tagListOption tagflex">
              <div>
                <img src={CodeImage} className="tagImage" />
                <div className="tagName">Language</div>
              </div>
              <div>
                <input
                  type="text"
                  className="inputfilter inputfil"
                  onChange={(e) => setInputt3(e.target.value)}
                  placeholder="Ex. JAVA"
                />
              </div>
            </div>

            <div className="tagflex applydiv">
              <button
                className="search-bar-button filterbtn"
                onClick={() => {
                  fff();
                }}
                id=" "
              >
                Apply
              </button>
            </div>

            <div className="tagflex applydiv selectedtag">
              {list.map((ele, index) => {
                return (
                  <span className="tag auth-Tag" id={index} onClick={cancell}>
                    {ele} <CancelIcon className="cancelitem" />
                  </span>
                );
              })}
              {list1.map((ele, index) => {
                return (
                  <span className="tag auth-Tag" id={index} onClick={cancell1}>
                    {ele} <CancelIcon className="cancelitem" />
                  </span>
                );
              })}
              {list2.map((ele, index) => {
                return (
                  <span className="tag auth-Tag" id={index} onClick={cancell2}>
                    {ele} <CancelIcon className="cancelitem" />
                  </span>
                );
              })}
              {list3.map((ele, index) => {
                return (
                  <span className="tag auth-Tag" id={index} onClick={cancell3}>
                    {ele} <CancelIcon className="cancelitem" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex row mt-5 justify-content-center w-100">
        {projects &&
          projects.map((project, index) => (
            <ProjectDiv key={index} id={project._id} project={project} />
          ))}
      </div>
    </>
  );
}
