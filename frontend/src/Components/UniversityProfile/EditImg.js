import React from 'react'

import { NavLink } from "react-router-dom";
function EditImg() {
	const CollegeId = "62f6135b8c07d28ed759794e";

const Handle_toggle=()=>{
		const img=document.getElementById('pop_Container')
		console.log(img);
	}
  return (
	<div>
	 <div className="popup-container" id="pop_Container">
      <div className="popup-box">
        <form 
        action='http://localhost:5000/collegeprofile'
        id='uploadForm'
        method='post' 
        encType="multipart/form-data">
        <input type="file" name="inputFile" id="uploadfile"/> 
        <input type="text"  name = "CollegeId" value={CollegeId} hidden />
		<NavLink className="" style={{textDecoration:"none",color:"black" }} to="/collegeprofile">
        <button type="submit" value="Submit" >Upload</button>
		</NavLink>
        </form>
      </div>
</div>
      
        
	</div>
  )
}

export default EditImg