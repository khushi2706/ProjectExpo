import React, { useState } from "react";
import "./InputView.css";

export default function InputView(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
          flexGrow: 1,
          textAlign: "left",
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {props.title}
        </div>

        <div className="sign-in-input-field-container" style={{ marginTop: 0 }}>
          <div className="sign-in-input-fields">{props.value}</div>
        </div>
      </div>
    </>
  );
}
