import React from "react";
import { ReactDOM } from "react";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";
import Header from "../Common/Header";

var sty = {
  backgroundColor: "#57bcff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};

var d = {
  height: "400px   ",
  borderStyle: "dashed",
};

var im = {
  height: "80px",
  width: "80px",
};

export default function Project_2() {
  return (
    <>
    <Header/>
    <div className="container mt-5">
    <ProgressBar wid="66%" num="2"/>
     
      
      <div className="w-100 d-flex flex-row justify-content-center align-items-center mt-4">
        <div
          className="w-75 mt-2 d-flex flex-column justify-content-center align-items-center"
          style={d}
        >
          <div style={im}>
            <img src="https://cdn3.iconfinder.com/data/icons/transfers/100/239296-cloud_upload-512.png" style={{ width: "100%", height: "100%" }}></img>
          </div>

          <form 
              action='http://localhost:5000/projectupload'
              id='uploadForm'
              method='post'
              encType="multipart/form-data">
              <input type="file" name="inputpath" id="uploadfile" webkitdirectory directory multiple/> 
              <button type="submit" value="Submit">Upload</button>
          </form>
          
        </div>
      </div>

      <div className="d-flex flex-row-reverse  mt-3 ">
        <div className="w-25">
        <NavLink className="" to="/UploadProject/Stage3">
        <button type="submit" style={{height:"41px"}} className=" search-bar-button  m-auto " >
        Next
      </button>
      </NavLink>
        </div>
        </div>
      </div>
    </>
  );
}
