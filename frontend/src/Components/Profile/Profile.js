import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import ProfileInputField from "./ProfileInputField";
import ProfileInputFieldExtended from "./ProfileInputFieldExtended";
import SideBarOption from "./SideBarOption";
import axios from "axios";

export default function Profile() {
  const [singleUser, setSingleUser] = useState({
    address: "dd",
    dob: "dd",
    email: "dd",
    first_name: "dd",
    gender: "dd",
    last_name: "ddd",
    password: "ddd",
    profile_pic: "ddd",
    university: "fff",
    university_id: "dddd",
    user_id: "dddd",
    user_type: "dddd",
    _id: "ddd",
  });

  const userId = "62ee3ed48b77963213ff078e";

  const sendReq = async () => {

    const res = await axios
      .get(`http://localhost:5000/api/user/getUserById/${userId}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  
  useEffect(() => {
    sendReq().then((data) => {
      console.log(data);
      setSingleUser(data.user[0]);
    });
  }, []);
  console.log(singleUser);
  return (
    <>
     {
      singleUser &&
       <div
       style={{
         display: "flex",
         textAlign: "center",
         justifyContent: "left",
         paddingTop: "20px",
         paddingLeft: "20px",
       }}
     >
       <div style={{ display: "flex", flexDirection: "column" }}>
         <div style={{ display: "flex", flexDirection: "row" }}>
           <div style={{ marginTop: "auto", marginBottom: "auto" }}>
             <div className="profile w-5 h-5">
               <img
                 src="https://picsum.photos/200"
                 className="w-110 h-110 rounded-circle"
                 height="100px"
               />
             </div>
           </div>
           <div
             style={{
               marginTop: "auto",
               marginBottom: "auto",
             }}
           >
             <div
               style={{
                 // marginTop: 50,
                 marginLeft: 20,
                 fontFamily: "poppins",
                 fontWeight: "bold",
                 fontSize: 22,
                 textAlign: "start",
               }}
             >
               Nikunj Patel
             </div>

             <div
               style={{
                 marginLeft: 20,
                 fontSize: 16,
                 color: "#9B9B9B",
                 fontWeight: "500",
               }}
             >
               ndpatel.tech@gmail.com
             </div>
           </div>
         </div>
         {/* horizontal line */}
         <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

         {/* options */}
         <SideBarOption icon="person" title="My Profile" />
         <SideBarOption icon="book" title="My Project" />
         <SideBarOption icon="groups" title="My Class" />
       </div>
       {/* vertical line */}
       <div
         style={{
           border: "2px solid #F5F7F9",
           // height: "-webkit-fill-available",
           // marginTop: "auto",
           // marginBottom: "auto",
           marginLeft: 20,
         }}
       >
         {/* this is for line */}
       </div>
       {/* profile section */}
       <div
         style={{
           display: "flex",
           flexDirection: "column",
           marginRight: "auto",
           marginLeft: "auto",
           textAlign: "start",
           marginLeft: 40,
           width: "-webkit-fill-available",
         }}
       >
         <div
           style={{
             display: "flex",
             flexDirection: "column",
             marginTop: 20,
           }}
         >
           <div
             style={{
               fontFamily: "poppins",
               fontWeight: "600",
               fontSize: 26,
               marginLeft: 30,
             }}
           >
             My Profile
           </div>
           <div
             style={{
               border: "2px solid #F5F7F9",
               marginLeft: "auto",
               marginRight: "auto",
               height: 1,
               marginTop: 5,
               width: "-webkit-fill-available",
             }}
           ></div>
         </div>

         <div style={{ display: "flex", flexDirection: "row" }}>
           <div>
             <div style={{ display: "flex", flexDirection: "row" }}>
               <ProfileInputField
                 title={"First Name"}
                 placeholder={"Ex: Nikunj"}
                 value={singleUser.first_name}
               />
               <div style={{ marginLeft: 10 }}>
                 <ProfileInputField
                   title={"Last Name"}
                   placeholder={"Ex: Patel"}
                   value={singleUser.last_name}
                 />
               </div>
             </div>

             <div style={{ width: "-webkit-fill-available" }}>
               <ProfileInputFieldExtended
                 title={"Email"}
                 placeholder={"Ex: ndpatel.tech@gmail.com"}
                 value={singleUser.email}
               />
             </div>

             <div style={{ display: "flex", flexDirection: "row" }}>
               <ProfileInputField 
               title={"Gender"} 
               placeholder={"Ex: Male"} 
               value={singleUser.gender}
               />
               <div style={{ marginLeft: 10 }}>
                 <ProfileInputField
                   title={"DOB"}
                   placeholder={"Ex: 31/10/2000"}
                   value={singleUser.dob}
                 />
               </div>
             </div>

             <div>
               <ProfileInputField
                 title={"College"}
                 placeholder={"Ex: Birla Vishwakarma Mahavidhyalaya"}
                 value={singleUser.university}
               />
             </div>

             <div style={{ display: "flex", flexDirection: "row" }}>
               <ProfileInputField
                 title={"Department"}
                 placeholder={"Ex: Computer"}
                 value={singleUser.university_id}
               />
               <div style={{ marginLeft: 10 }}>
                 <ProfileInputField
                   title={"Current Year"}
                   placeholder={"Ex: 2022"}
                   value={"2022"}
                 />
               </div>
             </div>

             <div
               style={{
                 marginTop: 20,
                 justifyContent: "end",
               }}
             >
               <Button title={"Apply Changes"} />
             </div>
           </div>

           <div
             style={{
               display: "flex",
               flexDirection: "column",
               marginLeft: "auto",
               marginRight: "auto",
             }}
           >
             <div
               style={{
                 fontFamily: "poppins",
                 fontSize: 22,
                 fontWeight: "bold",
                 marginTop: 10,
               }}
             >
               Profile Picture
             </div>
             <div
               className="profile w-5 h-5"
               style={{ marginTop: 20, marginBottom: "auto" }}
             >
               <img
                 src={singleUser.profile_pic}
                 className="w-110 h-110 rounded-circle"
                 height="300px"
               />
             </div>
             <div style={{ marginTop: 50 }}></div>
             <button
               style={{
                 width: "fit-content",
                 paddingLeft: 30,
                 paddingRight: 30,
                 marginBottom: "auto",
                 marginTop: "auto",
                 display: "flex",
                 justifyContent: "center",
                 height: 45,
                 borderColor: "#2C5EFF",
                 borderWidth: 1,
                 borderRadius: 5,
                 background: "#ffffff",
                 marginLeft: "auto",
                 marginRight: "auto",
                 boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
               }}
             >
               <div style={{}}>
                 <i
                   className="material-icons"
                   style={{
                     marginLeft: 10,
                     fontSize: 28,
                     color: "#2C5EFF",
                     paddingTop: 7,
                     marginTop: "auto",
                     marginBottom: "auto",
                   }}
                 >
                   edit
                 </i>
               </div>
               <div
                 style={{
                   fontFamily: "poppins",
                   fontWeight: "bold",
                   marginTop: "auto",
                   marginBottom: "auto",
                   color: "#2C5EFF",
                   marginLeft: 10,
                 }}
               >
                 Edit Picture
               </div>
             </button>
           </div>
         </div>
       </div>
     </div>
     }
    </>
  );
}
