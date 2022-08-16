import React from "react";
import bvm_logo from "../../Assets/Images/BVM_logo.png";
export default function SubCard(props) {
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
        <img
          src="https://bigeye.ug/wp-content/uploads/2016/05/Couple-travel.jpg"
          width="50vw"
          height="50vh"
        />
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

        <div style={{ fontWeight: "bold", textAlign: "left", marginTop: 15 }}>
          Objective:
        </div>
        <div
          style={{
            textAlign: "left",
            marginTop: 10,

            textOverflow: "ellipsis",
            overflow: "hidden",
            fontFamily: "poppins",
            fontSize: 14,
          }}
        >
          {props.obj}
        </div>
        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div> Credit :</div>

          <div
            style={{
              textAlign: "left",
              marginLeft: 7,

              textOverflow: "ellipsis",
              overflow: "hidden",
              fontFamily: "poppins",
              fontSize: 14,
            }}
          >
            {props.credit}
          </div>
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div> Course-code:</div>

          <div
            style={{
              textAlign: "left",
              marginLeft: 7,

              textOverflow: "ellipsis",
              overflow: "hidden",
              fontFamily: "poppins",
              fontSize: 14,
            }}
          >
            {props.ccode} 
          </div>
        </div>
        <div
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div> Year:</div>

        <div
          style={{
            textAlign: "left",
            marginLeft: 7,

            textOverflow: "ellipsis",
            overflow: "hidden",
            fontFamily: "poppins",
            fontSize: 14,
          }}
        >
          {props.year} 
        </div>
      </div>

      <div className='btn'>
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
