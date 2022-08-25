import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Search from "./Search/Search";
import RoadmapCard from "./RoadmapCard";
import axios from "axios";
import "./roadmap.css";

export default function Roadmap() {
  const [roadmaps, setRoadmaps] = useState();
  const sendReq = async () => {
    const res = await axios
      .get("http://localhost:5000/api/roadmap")
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };
  useEffect(() => {
    sendReq().then((data) => {
      setRoadmaps(data.roadmaps);
    });
  }, []);
  console.log(roadmaps);
  return (
    <div>
      <Header index="4" />
      <Search />
      <div
        className="card-container-main"
        style={{ marginLeft: 50, marginRight: 50 }}
      >
        {roadmaps &&
          roadmaps.map((roadmap, index) => (
            <RoadmapCard key={index} id={roadmap._id} rp={roadmap} />
          ))}
      </div>
    </div>
  );
}
