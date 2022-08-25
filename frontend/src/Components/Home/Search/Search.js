import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./search.css";
import CancelIcon from "@mui/icons-material/Cancel";
export default function Search(props) {
  const [searchinput, searchinputUpdate] = useState("");
  const [flag, setFlag] = useState("false");
  const cancelItem = () => {
    setFlag("false");
  };
  const searchfunc = () => {
    console.log(searchinput);
    if (searchinput == "") {
      alert("Please Insert Input");
    } else {
      sessionStorage.setItem("searchinput", searchinput);
      setFlag("true");
    }
  };
  return (
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
              style={{
                marginLeft: 10,

                fontSize: 28,
                color: "#9B9B9B",
              }}
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
            onClick={searchfunc}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}