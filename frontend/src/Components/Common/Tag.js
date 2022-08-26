import React from "react";
import "./Tag.css";
export default function Tag(props) {
  const backgroundColor = props.backgroundColor;
  console.log(backgroundColor);
  const myStyle = {
    backgroundColor: "#DEBA81",
  };

  let isIcon = false;
  if (props.isIcon) {
    isIcon = true;
    console.log("isIcon: " + isIcon);
  }
  return (
    <>
      <div className="tag-container" style={props.customeStyle}>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          {props.title}
        </div>
        {isIcon ? (
          <div style={{ marginTop: "10px" }}>
            <i
              className="material-icons"
              style={{ marginLeft: 10, fontSize: 28, color: "#9B9B9B" }}
            >
              {props.iconName}
            </i>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
