import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Search from "../Home/Search/Search";
import ProjectDiv from "./ProjectDiv";

export default function ProjectMain() {
  const [searchinput, searchinputUpdate] = useState("");

  const [projects, setProjects] = useState();
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
  const filter2 = () => {
    let temp = [...projects];
    console.log("===");
    console.log(temp);
    if (searchinput != "") {
      temp = temp.filter((ele) => {
        return ele.PName.toLowerCase().includes(searchinput.toLowerCase());
      });
    }
    console.log("---r---");
    console.log(temp);
    setProjects(temp);

    // sessionStorage.setItem('searchinput', searchinput);
    // setFlag("true");
    alert("clicked");
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
                placeholder={props.title}
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

      <div className="d-flex row mt-5 justify-content-center w-100">
        {projects &&
          projects.map((project, index) => (
            <ProjectDiv key={index} id={project._id} project={project} />
          ))}
      </div>
    </>
  );
}
