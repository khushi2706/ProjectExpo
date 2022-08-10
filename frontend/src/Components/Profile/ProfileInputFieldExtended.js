import React from "react";
import "./ProfileInputFieldExtended.css";
export default function ProfileInputFieldExtended(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          {props.title}
        </div>
        <div>
          <input
            className="input-field"
            type={"text"}
            placeholder={props.placeholder}

            value={props.value}


          />
        </div>
      </div>
    </>
  );
}
