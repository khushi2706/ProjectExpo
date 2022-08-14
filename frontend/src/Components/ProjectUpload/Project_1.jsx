import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import Header from "../Common/Header";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";

var sty = {
  backgroundColor: "#57bcff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};
// var tags;

export default function Project_1() {
  var [tags, setTags] = useState("");
  
  const Tags = (event) => {
    var str = event.target.value;
    setTags(str);
  };



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
                required
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <label for="desc" className="col-sm-2 downn col-form-label">
              <strong>Description:</strong>
            </label>
            <div className="col-sm-10">
              <textarea className="form-control f-textarea" id="desc" placeholder="Describe your project in min 25 words" rows="3"  required></textarea>
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
                  name="type"
                  id="software"
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
                  name="type"
                  id="hardware"
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
                onChange={Tags}
                type="text"
                class="form-control form-input"
                id="Tag"
                placeholder="Enter Applicable Tag Like.. Machine Learning - MERN Stack Application"
                required
              />
            </div>
            <div className="w-100 text-center">{tags}</div>
          </div>

          <div className="d-flex flex-row-reverse  mt-3 ">
            <div className="w-25">
            <NavLink className="" to="/UploadProject/Stage2">
            <button type="submit" style={{height:"41px"}} className=" search-bar-button  m-auto " >
            Next
          </button>
          </NavLink>
              
            </div>
          </div>
        </form>
      </div>
     </div>
    </>
  );
}
