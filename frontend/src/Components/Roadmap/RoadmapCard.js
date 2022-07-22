import React from 'react'

export default function RoadmapCard(props) {
  console.log();
  return (
    <>
    <div className="card" style={{ width: "18rem" }}>
  <img src={props.ImgLink} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">
     {props.desc}
    </p>
    <a href="#" className="btn btn-primary">
      View More
    </a>
  </div>
</div>

    </>
  )
}
