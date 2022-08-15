import React from "react";
import "./CustomizeDropDown.css";
export default function CustomizeDropDown(props) {
  console.log(props.list);
  return (
    <>
      <div className="sign-in-input-field-container">
        <select onChange={props.handleChange}>
          {props.list.map((item, index) => (
            <option value={item[index]._id}>{item[index].CName}</option>
          ))}
        </select>
      </div>
    </>
  );
}
