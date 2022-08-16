import React from "react";
import "./SideBarOption.css";
export default function SideBarOption(props) {
  return (
    <>
      <div onClick={props.onClick} className="option-container active">
        <div>
          <i
            className="material-icons"
            style={{
              marginLeft: 10,
              fontSize: 28,
              color: "#000000",
              marginTop: 8,
              paddingTop: 10,
              paddingBottom: 17,
            }}
          >
            {props.icon}
          </i>
        </div>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            fontFamily: "poppins",
            fontWeight: "600 ",
            marginLeft: 10,
          }}
        >
          {/* side bar container */}
          {props.title}
        </div>
      </div>
    </>
  );
}
