import React, { useEffect, useState } from "react";
import DeptCard from "../UniversityProfile/DeptCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FacultuSubject() {
  const [mySubjects, setMySubjects] = useState();

  const professorId = "62ff4ff502288569b439bc1f";

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/subject/getByProfId/${professorId}`)

      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log("Data from API:" + data[0].Fname);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      console.log(data.subjects);
      setMySubjects(data.subjects);
    });
  }, []);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {mySubjects &&
          mySubjects.map((subject, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: `/MyProject` }}
              state={{ subject_id: subject._id }}
            >
              <DeptCard title={subject.SubName} info={subject.SubInfo} />
            </Link>
          ))}
      </div>
    </>
  );
}
