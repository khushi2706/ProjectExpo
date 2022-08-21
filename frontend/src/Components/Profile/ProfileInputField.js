import React, { useState } from "react";
import "./ProfileInputField.css";
export default function ProfileInputField(props) {
  const [val, setVal] = useState(props.vale);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow: 1,
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
            type={props.title}
            placeholder={props.placeholder}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            name="val"
          />
        </div>
      </div>
    </>
  );
}
