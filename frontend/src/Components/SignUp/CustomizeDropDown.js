import React from "react";
import "./CustomizeDropDown.css";
export default function CustomizeDropDown(props) {
  console.log(props.list);
  return (
    <>
      <div className="sign-in-input-field-container">
        <select onChange={props.handleChange}>
          {props.list.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
}
