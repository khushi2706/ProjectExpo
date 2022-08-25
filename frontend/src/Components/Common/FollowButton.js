import React, { useState } from "react";
import "./FollowButton.css";
export default function FollowButton() {
  const [title, setTitle] = useState("Follow");
  const [icon, setIcon] = useState("person_add");
  const handleClickEvent = () => {
    if (title == "Follow") {
      setTitle("Unfollow");
      setIcon("person_off");
    } else {
      setTitle("Follow");
      setIcon("person_add");
    }
  };
  return (
    <>
      <div className="row-container parent-container">
        <i
          className="material-icons"
          style={{
            fontSize: 28,
            marginTop: 10,
            marginBottom: "auto",
            color: "#ffffff",
          }}
        >
          {icon}
        </i>
        <div onClick={handleClickEvent} className="button-container">
          {title}
        </div>
      </div>
    </>
  );
}
