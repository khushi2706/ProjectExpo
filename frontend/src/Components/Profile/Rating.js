import React from "react";
import "./Rating.css";
export default function Ratings(props) {
  return (
    <>
      <div className="flex-container">
        <div className="rating-text-container">{props.ratingVal}</div>
        <i
          className="material-icons"
          style={{ marginLeft: 10, fontSize: 28, color: "#000" }}
        >
          thumb_up
        </i>
      </div>
    </>
  );
}
