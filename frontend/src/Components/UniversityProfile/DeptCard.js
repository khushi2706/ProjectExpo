import React from "react";
import bvm_logo from "../../Assets/Images/BVM_logo.png";
export default function DeptCard(props) {
  return (
    <>
      <div
        style={{
          width: "17vw",

          textAlign: "center",
          boxShadow: "0px 0px 8px 1px #B5B5B5",
          marginLeft: 20,
          marginTop: 30,
          padding: 15,
          borderRadius: 15,
          fontFamily: "poppins",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "poppins",
            marginTop: 10,
            color: "#000",
          }}
        >
          {props.title}
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#000",
            fontFamily: "poppins",
            marginTop: 10,
          }}
        >
          {props.info}
        </div>

        <div className="btn">
          <button className="button text-success btn-ed button-primary">
            Edit
          </button>

          <button className="button text-danger btn-ed button-primary">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
