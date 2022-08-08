import React from "react";
import { ReactDOM } from "react";

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
      <div className="progress" style={{ height: "30px" }}>
        <div
          className="progress-bar flex-row justify-content-around"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            style={sty}
            className="d-flex flex-row justify-content-center align-items-center "
          >
            <span style={{ fontSize: "18px" }}>1</span>
          </div>
          <div
            style={sty}
            className="d-flex flex-row justify-content-center align-items-center "
          >
            <span style={{ fontSize: "18px" }}>2</span>
          </div>
          <div
            style={sty}
            className="d-flex flex-row justify-content-center align-items-center "
          >
            <span style={{ fontSize: "18px" }}>3</span>
          </div>
        </div>
      </div>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="mt-2">Readme File</div>
        <div
          className="w-75 mt-2 d-flex flex-column justify-content-center align-items-center"
          style={d}
        >
          <textarea className="form-control" id="desc" rows="14"></textarea>
        </div>
      </div>

      <div className="d-flex flex-row-reverse  mt-3 ">
        <div className="w-25">
          <button type="submit" className="btn btn-primary m-auto ">
            Finish
          </button>
        </div>
      </div>
    </>
  );
}
