import React from "react";
import { ReactDOM } from "react";



var sty={
    backgroundColor:'#57bcff',
    width:'30px',
    height:'30px',
    borderRadius:'50%',
}

var d={
    height:'400px   ',
    borderStyle:'dashed',
}   

var im={
    height:'80px',
    width:'80px',
}

export default function Project_2()
{
    return(
        <>
            <div className="progress" style={{ height:'30px'}}>
            <div className="progress-bar flex-row justify-content-around" role="progressbar" style={{width: '66%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div style={sty} className="d-flex flex-row justify-content-center align-items-center ">
                    <span style={{fontSize:'18px'}}>1</span>
                </div>
                <div style={sty} className="d-flex flex-row justify-content-center align-items-center ">
                    <span style={{fontSize:'18px'}}>2</span>
                </div>
            </div>
            </div>

            <div className="w-100 d-flex flex-row justify-content-center align-items-center mt-4">
                <div className="w-75 mt-2 d-flex flex-column justify-content-center align-items-center" style={d}>
                    <div style={im}>
                        <img src="file.png" style={{width:'100%', height:'100%'}}></img>
                    </div>
                    <div>
                        <strong style={{color:'#3437e3'}}>Choose The file form your Computer</strong>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-row-reverse  mt-3 " >
                        <div className="w-25">
                        <button type="submit" className="btn btn-primary m-auto ">Next</button>

                        </div>
                    </div>

        
        


        </>



    )


}