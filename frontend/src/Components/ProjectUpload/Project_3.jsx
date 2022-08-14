import React from "react";
import { ReactDOM } from "react";
import Header from "../Common/Header";
import ProgressBar from "./ProgressBar";

var sty = {
  backgroundColor: "#57bcff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};

var d = {
  height: "400px   ",
  border: "2px",
};

var im = {
  height: "80px",
  width: "80px",
};

export default function Project_3() {
  return (
    <>
        <Header/>
    <div className="container mt-5">
    <ProgressBar wid="100%" num="3"/>
     

      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="mt-2">Readme File</div>
        <div
          className="w-75 mt-2 d-flex flex-column justify-content-center align-items-center"
          style={d}
        >
          <textarea className="form-control f-textarea" placeholder="Enter ReadMe File For your project " id="desc" rows="10"></textarea>
        </div>
      </div>

      <div className="d-flex flex-row-reverse  mt-3 ">
        <div className="w-25">
        <button type="submit" style={{height:"41px"}} className=" search-bar-button  m-auto " >
            Submit
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
