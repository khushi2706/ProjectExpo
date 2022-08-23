import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import Header from "../Common/Header";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";
import axios from "axios";

var sty = {
  backgroundColor: "#57bcff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};
// var tags;

export default function Project_1() {
  var [tags, setTags] = useState("");
  var [ inputTag , setInputTag ] = useState({});
  const Tags = (event) => {
    var str = event.target.value;
    setTags(str);
  };

  const handleChange = (e) =>{
    setInputTag((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const sendReq = async() =>{
    let Rtype = document.getElementsByName("Rtype");
  
    Array.from(Rtype).forEach(element => {
      if(element.checked)
      inputTag.PType = element.value;
    });
    

    inputTag.UserId = "62f9142c5cf6d43a8bbcc544"
   
    console.log(inputTag);

    const res = await axios
    .post(`http://localhost:5000/api/Project/add`,
    {
      inputTag
    })
    .catch((err)=> console.log(err));
    const data = await res.data;
    return data;
  }
  const uploadProject = (e)=>{
    e.preventDefault();
    sendReq()
      .then((data) => console.log(data))
      .then(() => console.log("done"));
  }

  return (
    <>
      <Header />
     <div className="container mt-5">
     <ProgressBar wid="33%" num="1"/>
      <div className=" p-3 mt-4 ">
        <form>
          <div className="form-group row mt-4">
            <label
              for="name"
              className="col-sm-2 col-form-label downn font-weight-bold"
            >
              <strong>Name:</strong>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-input"
                id="name"
                placeholder="Enter Your Project Name"
                onChange={handleChange}
                value={inputTag.PName}
                required
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <label for="desc" className="col-sm-2 downn col-form-label">
              <strong>Description:</strong>
            </label>
            <div className="col-sm-10">
              <textarea className="form-control f-textarea" id="desc" 
              placeholder="Describe your project in min 25 words" 
              rows="3"  
              onChange={handleChange}
              value={inputTag.Desc}
              required></textarea>
            </div>
          </div>

          <div className="row mt-3">
            <div className=" col-md-6">
              <div>
                <label for="type">
                  <strong>Type:</strong>
                </label>
              </div>

              <div className="form-check form-check-inline mt-1">
                <input
                  className="form-check-input "
                  type="radio"
                  name="Rtype"
                  id="software"
                  onChange={handleChange}
                  value="software"
                />
                <label className="form-check-label" for="inlineRadio1">
                  Software
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Rtype"
                  id="hardware"
                  onChange={handleChange}
                  value="hardware"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Hardware
                </label>
              </div>
            </div>

            <div className=" col-md-6 ">
              <div>
                <label for="privacy">
                  <strong>Privacy:</strong>
                </label>
              </div>

              <div className="form-check form-check-inline mt-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="privacy"
                  id="public"
                  value="public"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="public">
                  Public
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="privacy"
                  id="private"
                  value="private"
                />
                <label className="form-check-label" for="private">
                  Private
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="privacy"
                  id="university"
                  value="university"
                />
                <label className="form-check-label" for="university">
                  University
                </label>
              </div>
            </div>
          </div>

          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-2 downn col-form-label">
              <strong>Tags:</strong>
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control form-input"
                id="Tag"
                value={inputTag.Tags}
                onChange={handleChange}
                placeholder="Enter Applicable Tag Like.. Machine Learning - MERN Stack Application"
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse  mt-3 ">
            <div className="w-25">
            <button type="submit" style={{height:"41px"}} onClick={uploadProject} className=" search-bar-button  m-auto " >
            Next
          </button>        
              
            </div>
          </div>
        </form>
      </div>
     </div>
    </>
  );
}
