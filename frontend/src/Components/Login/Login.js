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
var inp1={
    marginTop:'1rem',
    padding:'0.5rem',
   
}

var but={
    backgroundColor:'#ffffff',
}
export default function Login(props)
{
    return(
        <>
        {/* <div className="row justify-content-center align-items-center  " style={search}> */}
            <div className='d-flex flex-column justify-content-around align-items-center  ' style={wrapper}>
                <div className="w-50 text-center " ><h2>Log In</h2></div>
                <div className="w-100 text-center">
                <form className="form-inline">
                    <div className="col w-50 m-auto">
                    <input className="form-control " type="search" placeholder="Email" aria-label="Search" style={inp}/>
                    <input className="form-control " type="search" placeholder="Password" aria-label="Search" style={inp}/>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" style={inp}>
                        <option selected>Student</option>
                        <option value="1">Administrator</option>
                        <option value="2">University Administrator</option>
                        <option value="3">College Administrator</option>
                    </select>
                    <div className="mt-4">
                        Don't Have Account? Sign Up Here....!
                    </div>
                    <button className="btn btn-primary  mt-3 w-100" type="submit">Log in</button>
                    <button className="btn btn-light mt-3 w-100" type="submit" style={but}>
                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div>
                                <img  src='google.svg'/>
                            </div>
                            <div>
                                Sign In with Google
                            </div>
                        </div>
                    </button>


                    <div style={inp1}>Forgot Password, Click here</div>
                    </div>
                  
                
                
                </form>
                
                </div>



            </div>
          
        {/* </div> */}
        </>
        
    )
}