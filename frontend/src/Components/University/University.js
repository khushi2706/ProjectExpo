import "./University.css";
import React, { useState, useEffect } from "react";
import Search from "../Home/Search/Search";
import Header from "../Common/Header";
import RecentSearchTag from "./RecentSearchTag";
import UniversityCard from "./UniversityCard";
import axios from "axios";

export default function University() {
  const [user, setUser] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/university`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    console.log("-----");
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.universities));

    console.log(user);
  }, []);
  return (
    <>
      {user && (
        <>
          <div style={{ position: "sticky" }}>
            <Header />
          </div>

          <div style={{ position: "sticky" }}>
            <Search title="Search University" />
          </div>

          <div
            style={{
              position: "sticky",
              textAlign: "left",
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
              fontFamily: "poppins",
            }}
          >
            Recent Search
          </div>

          <div
            style={{
              position: "sticky",
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <RecentSearchTag title="Birla Vishwakarma Mahavidhyalaya" />
            <RecentSearchTag title="DDU" />
            <RecentSearchTag title="Nirma" />
            <RecentSearchTag title="IIT Mumbai" />
          </div>

          <hr></hr>

         
            <div
              style={{
                position: "sticky",
                display: "flex",
                flexDirection: "row",
                top: 200,
                flexWrap: "wrap",
              }}
            >
            <div className="container">
            <div className="row" style={{ marginBottom: 20 }}>
           
            
            {user.map((data, index) => (
              <div className="col-md-3">
              <UniversityCard
                title={data.UName}
                information={data.Address}
                universityType={data.UType}
                email={data.Email}
                district={data.District}
                key={index}
              />
              </div>
            ))}
            </div>
            </div>
            </div>
          
        </>
      )}
    </>
  );
}
