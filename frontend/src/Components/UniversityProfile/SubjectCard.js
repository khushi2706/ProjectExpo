import React, { useEffect, useState } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios";
import "./UniProfile.css";
import { NavLink } from "react-router-dom";
import SubCard from "./SubCard";

function SubjectCard(props) {
  const sendRequest = async () => {
    const res = await axios
      .get(
        `http://localhost:5000/api/subject/getByDepartId/${props.subid}`
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    console.log("-----");
    return data;
  };

  const [sub2, setSub2] = useState();

  useEffect(() => {
    sendRequest().then((data) => setSub2(data.subjects));
    console.log("-----------+");
    console.log(sub2);
  }, []);

  return (
    <div>
      {sub2 && (
        <>
          <div className="container">
            <div className="row">
              {sub2.map((data, index) => (
                <div className="col-md-4">
                  <>
                    <SubCard
                      title={data.SubName}
                      credit={data.Credit}
                      obj={data.Objective}
                      year={data.Year}
                      ccode={data.CourseCode}
                      SubCardType="Apply Now"
                      key={index}
                    />
                  </>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SubjectCard;
