import React from "react";
import bvm_logo from "../../Assets/Images/BVM_logo.png";
import Tag from "../Common/Tag";

export default function University(props) {
  const projectStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 10,
  };
  const projectStyle2 = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 10,
    color:"black"
  };
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
        <img src={bvm_logo} width="50vw" height="50vh" />
        <div
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {props.title}
        </div>

        <div
          style={{
            textAlign: "left",
            marginTop: 10,
            height: "44%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontFamily: "poppins",
            fontSize: 14,
          }}
        >
          Gujarat first Engineering college initiative by sardar vallabhbhai
          patel at vallabh vidhyanagar. this year bvm has completed 75 years.We
          offer multiple enginerring courses every year...
        </div>

        <div className="card-body">
          <div
            style={{
              fontWeight: "bold",
              textAlign: "left",
              marginTop: 15,
              display: "flex",
              flexDirection: "column",

              justifyContent: "left",
              fontSize: 15,
            }}
          >
            <div   style={{ fontWeight: "500", fontSize:"17px",textAlign: "left", marginTop: 15 }}> Located:</div>
            <Tag title={props.district} customeStyle={projectStyle} />
          </div>

          <div style={{ display: "flex", flexDirection: "column",justifyContent:"left" }}>
            <div
              style={{ fontWeight: "500", fontSize:"17px",textAlign: "left", marginTop: 15 }}
            >
              TYPE:
            </div>
            <Tag title={props.universityType} customeStyle={projectStyle} />
          </div>
          <div className="btn">
          <Tag title= {"visit website"} customeStyle={projectStyle2} />
          </div>
        </div>
      </div>
    </>
  );
}
