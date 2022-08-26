import React from 'react'
import Cookies from 'universal-cookie';

import { Navigate } from "react-router-dom";
export default function Logout() {
  
        console.log('Logout');
    
        // CLEAR DATA FROM STORAGE
        const cookie = new Cookies();
        cookie.remove("userId",{path: "/"});
        cookie.remove("authToken",{path: "/"});
        cookie.remove("userType",{path:"/"});
        cookie.remove("uTypeId", {path: "/"})

    
  return (
    <Navigate to="/login" replace={true} />
 
  )
}
