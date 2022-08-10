import React, { useState } from "react";
import "./ProfileInputFieldExtended.css";
export default function ProfileInputFieldExtended(props) {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    // 👇️ this is the input field itself
    console.log(event.target);

    // 👇️ this is the new value of the input
    console.log(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "poppins",
          marginTop: 10,
        }}
      >
        <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          {props.title}
        </div>
        <div>
          <input
            className="input-field"
            type={"text"}
            placeholder={props.placeholder}

            onChange={handleChange}
        value={message}

          />
        </div>
      </div>
    </>
  );
}
