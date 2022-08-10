import React, { useEffect, useState } from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios"
import "./UniProfile.css"


function UniProfile() {
  return (
   <>
   <div
       style={{
         display: "flex",
         textAlign: "center",
         justifyContent: "left",
         paddingTop: "20px",
         paddingLeft: "20px",
       }}
     >
     <div style={{ display:"flex", flexDirection: "column" }}>
         <div style={{ display: "flex", flexDirection: "row",position:"sticky",top:"0",padding:"15px"}}>
           <div style={{ marginTop: "auto", marginBottom: "auto" }}>
             <div className="profile w-5 h-5">
               <img
                 src="https://www.bvmengineering.ac.in/images/BVM%20Logo-1.png"
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
               Birla Vishwakarma..
             </div>

             <div
               style={{
                 marginLeft: 20,
                 fontSize: 16,
                 color: "#9B9B9B",
                 fontWeight: "500",
               }}
             >
               bvmengineering@bvm..
             </div>
           </div>
         </div>
         {/* horizontal line */}
         <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

         {/* options */}
         <div style={{position:"sticky",top:"130px",padding:"10px"}}>
         <SideBarOption icon="person" title="Profile" />
         <SideBarOption icon="book" title="Department" />
         <SideBarOption icon="groups" title="Faculty" />
         <SideBarOption icon="groups" title="Subjects" />
         </div>
         
       </div>

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

      <div>
      <img className="profilepic" style={{width:"907px" , height:"343px",margin:"10px",padding:"5px"}} src="https://tse3.mm.bing.net/th?id=OIP.MnwaoGEMyJ4apfF-tH-KVAHaES&pid=Api&P=0" alt="college photo"/>
      <img className="profilepicedit" style={{opacity:"70%",cursor:"pointer"}} src="img/edit.png"/>
      </div>

      
      <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="inputchange">
       <div style={{ width: "-webkit-fill-available" }}>
          <ProfileInputField
            title={"College Name"}
            placeholder={"Ex: Birla Vishwakarma Mahavidyalaya"}
            vale={"Birla Vishwakarma Mahavidyalaya"}
          />
        </div>

        <div>
          <ProfileInputField
            title={"College Information"}
            placeholder={"Ex: Re-engineer curricula to meet global  employment requirements. Promote innovative practices at all levels."}
            vale={"Re-engineer curricula to meet global  employment requirements. Promote innovative practices at all levels."}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",flexGrow:"1" }}>
          <ProfileInputField
            title={"Email"}
            placeholder={"Ex: Dvala453@gmail.com"}
            vale={"principal@bvmengineering.ac.in"}
          />
          <div style={{ marginLeft: 10 ,flexGrow:"1"}}>
            <ProfileInputField
              title={"Type"}
              placeholder={"Ex: Private"}
              vale={"Private"}
            />
          </div>
        </div>

        <div>
          <ProfileInputField
            title={"Address"}
            placeholder={"Ex: Mota Bazar, Vallabh Vidyanagar"}
            vale={"Mota Bazar, Vallabh Vidyanagar"}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",flexGrow:"1" }}>
          <ProfileInputField 
          title={"District"} 
          placeholder={"Ex: Anand"} 
          vale={"Anand"}
          />
          <div style={{ marginLeft: 10,flexGrow:"1" }}>
            <ProfileInputField
              title={"State"}
              placeholder={"Ex: Gujarat"}
              vale={"Gujarat"}
            />
          </div>
        </div>

        <div>
          <ProfileInputField
            title={"University"}
            placeholder={"Ex: Gujarat Technology University"}
            vale={"Gujarat Technology University"}
          />
        </div>

        <div>
        <ProfileInputField
          title={"Website"}
          placeholder={"Ex: https://scholarhome.vercel.app"}
          vale={"https://scholarhome.vercel.app"}
        />
      </div>

        
        <div
          style={{
            marginTop: 20,
            justifyContent: "end",

            display:"flex",
            marginBottom:"50px"
          }}
        >
          <Button title={"Apply Changes"} />
        </div>
      </div>

 
    </div>
</div>


     </div>
   </>
  )
}

export default UniProfile