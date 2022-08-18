import React from "react";
import "./Tag.css";
export default function Tag(props) {
  const backgroundColor = props.backgroundColor;
  console.log(backgroundColor);
  const myStyle = {
    backgroundColor: "#DEBA81",
  };
  return (
    <>
      <div className="tag-container" style={props.customeStyle}>
        {props.title}
      </div>
    </>
  );
}
