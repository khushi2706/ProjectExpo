import React ,{useCallback}from "react";
import { ReactDOM } from "react";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";
import Header from "../Common/Header";
 
import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import {useDropzone} from 'react-dropzone'


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
 
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

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
          <div {...getRootProps()}>
      <input {...getInputProps()} webkitdirectory mozdirectory directory />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
       
          
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
