import React from "react";
import "./Button.css";
export default function Button(props) {
  return (
    <button
      className="search-bar-button"
      style={{ width: "fit-content", height: 50 }}
    >
      {props.title}
    </button>
  );
}
