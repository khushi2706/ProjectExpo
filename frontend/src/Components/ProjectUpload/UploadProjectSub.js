import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import Header from "../Common/Header";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UploadProjectSub() {
    var [tags, setTags] = useState("");
    var [ inputTag , setInputTag ] = useState({});
    const subId = useParams().SubId;
    const Tags = (event) => {
      var str = event.target.value;
      setTags(str);
    };
  
    const handleChange = (e) =>{
      console.log(e.target.name);
      setInputTag((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    
    const sendReq = async() =>{
      let Rtype = document.getElementsByName("Rtype");
      console.log(inputTag.PName);
      
      Array.from(Rtype).forEach(element => {
        if(element.checked)
        
        inputTag.PType = element.value;
        console.log(inputTag);
      });
      inputTag.UserId = "62f9142c5cf6d43a8bbcc544"
      inputTag.isPrivete = true
     // inputTag.PType = "Software"
   
    inputTag.SubjectId = subId

      console.log(inputTag);
      const res = await axios
      .post(`http://localhost:5000/api/Project/add`,inputTag)
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
      <h3 className="mt-3">Upload Your Project Here!!</h3>
       <div className="container">
        <div className=" p-3 mt-4 ">
          <form  onSubmit={uploadProject} >
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
                  name="PName"
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
                name="Desc"
                onChange={handleChange}
                value={inputTag.Desc}
                required></textarea>
              </div>
            </div>
  
            <div class="form-group row mt-3">
              <label for="inputPassword" class="col-sm-2 downn col-form-label">
                <strong>Project Link</strong>
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control form-input"
                  id="ProjectLink"
                  name="ProjectLink"
                  value={inputTag.ProjectLink}
                  onChange={handleChange}
                  placeholder="Project Upload"
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className=" col-ms-10">
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
                    value="Software"
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
                    value="Hardware"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Hardware
                  </label>
                </div>
              </div>
            </div>
  
            
  
            {/* <div class="form-group row mt-3">
              <label for="inputPassword" class="col-sm-2 downn col-form-label">
                <strong>Project</strong>
              </label>
               <div class="col-sm-10">
                <input
                  type="file"
                  class="form-control form-input"
                   directory="" webkitdirectory=""
                  onChange={handleChangeOfFile}
                  required   
                />
              </div> 
            </div>
             */}
  
            <div className="justify-content align-center  mt-3 ">
              <div className="w-25">
              <button type="submit" style={{height:"41px"}} onClick={uploadProject} className=" search-bar-button  m-auto " >
              Upload
            </button>        
                
              </div>
            </div>
          </form>
        </div>
       </div>
      </>
    );
  }
