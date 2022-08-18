import React, { useEffect, useState } from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios"
import "./UniProfile.css"
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";

// import Popup from 'reactjs-popup';

function UniProfile() {
  
 const cookies = new Cookies();
 const UserType = cookies.get('userType');
 console.log(UserType);
  const CollegeId = "62f6135b8c07d28ed759794e";
const Handle_toggle=()=>{
    const img=document.getElementById('pop_Container')
    console.log(img);
}

const [user, setUser] = useState();

const sendRequest = async () => {
  const res = await axios
    .get(`http://localhost:5000/api/college/collegeId/${CollegeId}`)
    .catch((err) => console.log(err));
  const data = await res.data;
  console.log(data);
  console.log("-----");
  return data;
};
useEffect(() => {
  sendRequest().then((data) => setUser(data.college)); 
}, []);


  return (
    
   <>
{
  UserType != 'College-admin'
  &&
  <Navigate to="/login" replace={true} />
}
   {user && 
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
             {user  && 
              user.CName.substring(0,17)}..

             </div>

             <div
               style={{
                 marginLeft: 20,
                 fontSize: 16,
                 color: "#9B9B9B",
                 fontWeight: "500",
               }}
             >
             {user  && 
              user.CollegeEmail}
             </div>
           </div>
         </div>
         {/* horizontal line */}
         <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

         {/* options */}
         <div style={{position:"sticky",top:"130px",padding:"10px"}}>
         <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegeprofile">
         <SideBarOption icon="person"  title="Profile" />
         </NavLink>
         
         <NavLink className="" style={{textDecoration:"none" ,color:"black" }} to="/collegedepartment">
         <SideBarOption icon="book" title="Department" />
         </NavLink>

         <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegefaculty">
         <SideBarOption icon="groups" title="Faculty" />
         </NavLink>

         <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegesubjects">
         <SideBarOption icon="groups" title="Subjects" />
         </NavLink>
        
         <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/Logout">
         <SideBarOption icon="groups" title="Logout" />
         </NavLink>
        
        
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
      
      <div className="popup-container" id="pop_Container">
            <div className="popup-box">
              <form 
              action='http://localhost:5000/collegeprofile'
              id='uploadForm'
              method='post' 
              encType="multipart/form-data">
              <input type="file" name="inputFile" id="uploadfile"/> 
              <input type="text"  name = "CollegeId" value={CollegeId} hidden />
              <button type="submit" value="Submit">Upload</button>
              </form>
            </div>
      </div>
        
      <div>
      <img className="profilepic" style={{width:"907px" , height:"343px",margin:"10px",padding:"5px"}} src="https://tse3.mm.bing.net/th?id=OIP.MnwaoGEMyJ4apfF-tH-KVAHaES&pid=Api&P=0" alt="college photo"/>
      <NavLink className="" style={{textDecoration:"none",color:"black" }} to="/">
      <img className="profilepicedit" style={{opacity:"70%",cursor:"pointer"}} src="img/edit.png"  onclilck={Handle_toggle}/>
      </NavLink>
      
      </div>

      
      <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="inputchange">
       <div style={{ width: "-webkit-fill-available" }}>
          <ProfileInputField
            title={"College Name"}
            placeholder={"Ex: Birla Vishwakarma Mahavidyalaya"}
            vale={user.CName}
          />
        </div>

        <div>
          <ProfileInputField
            title={"College Information"}
            placeholder={"Ex: Re-engineer curricula to meet global  employment requirements. Promote innovative practices at all levels."}
            vale={user.CollegeInfo}

          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",flexGrow:"1" }}>
          <ProfileInputField
            title={"Email"}
            placeholder={"Ex: Dvala453@gmail.com"}
            vale={user.CollegeEmail}
          />
          <div style={{ marginLeft: 10 ,flexGrow:"1"}}>
            <ProfileInputField
              title={"Type"}
              placeholder={"Ex: Private"}
              vale={user.Ctype}
            />
          </div>
        </div>

        <div>
          <ProfileInputField
            title={"Address"}
            placeholder={"Ex: Mota Bazar, Vallabh Vidyanagar"}
            vale={user.Address}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row",flexGrow:"1" }}>
          <ProfileInputField 
          title={"District"} 
          placeholder={"Ex: Anand"} 
          vale={user.District}
          />
          <div style={{ marginLeft: 10,flexGrow:"1" }}>
            <ProfileInputField
              title={"State"}
              placeholder={"Ex: Gujarat"}
              vale={user.State}
            />
          </div>
        </div>

        <div>
          <ProfileInputField
            title={"University"}
            placeholder={"Ex: Gujarat Technology University"}
            vale={user.UniName}
          />
        </div>

        <div>
        <ProfileInputField
          title={"Website"}
          placeholder={"Ex: https://scholarhome.vercel.app"}
          vale={user.CollegeWebsite}
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
          <Button title={"Request For Edit"} />
        </div>
      </div>

 
    </div>
</div>


     </div>
    }
   </>
  )
}

export default UniProfile