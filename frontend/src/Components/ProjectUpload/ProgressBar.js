import React from "react";
var sty = {
  backgroundColor: "#57bcff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};

function ProgressBar(props) {
  return (
    <div>
      <div className="progress" style={{ height: "30px" }}>
        <div
          className="progress-bar flex-row justify-content-around"
          role="progressbar"
          style={{ width: props.wid }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.num == "1" && (
            <div
              style={sty}
              className="d-flex flex-row justify-content-center align-items-center "
            >
              <span style={{ fontSize: "18px" }}>1</span>
            </div>
          )}
          {props.num == "2" && (
            <>
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
            </>
          )}
          {props.num == "3" && (
           

            <>
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
          </>
          
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
