import React from "react";
import { ReactDOM } from "react";


var search={
    // backgroundColor:'#cce6ff',
    height:'100%',
    width:'100.8%',
    overflow:'hidden',
}

var wrapper={
    backgroundColor:'#F6F7FB',
    height:'30rem',
    width:'600px',
    // overflow:'hidden',
}
var inp={
    marginTop:'1rem',
    padding:'0.5rem',
    boxShadow:'3px 5px #D3D3D3',
}


var but={
    backgroundColor:'#ffffff',
}
export default function ForgotPassword(props)
{
    return(
        <>
        {/* <div className="row justify-content-center align-items-center  " style={search}> */}
            <div className='d-flex flex-column justify-content-center align-items-center  ' style={wrapper}>
                <div className="w-50 text-center " ><h2>Forgot Password</h2></div>
                <div className="w-100 text-center">
                <form className="form-inline">
                    <div className="col w-50 m-auto">
                    <input className="form-control " type="search" placeholder="Enter Email ID" aria-label="Search" style={inp}/>
                    
                    <button className="btn btn-primary  mt-3 w-100" type="submit">Submit</button>
                 
                    <div className="mt-3">
                        New Password will be sent once entered the email ID
                    </div>

                    </div>
                  
                
                
                </form>
                
                </div>



            </div>
          
        {/* </div> */}
        </>
        
    )
}