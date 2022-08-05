import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";



var sty={
    backgroundColor:'#57bcff',
    width:'30px',
    height:'30px',
    borderRadius:'50%',
}
// var tags;



export default function Project_1()
{
    
var [tags,setTags]=useState(""); 

const Tags=(event)=>
{

var str=event.target.value;
setTags(str);
};

    return(
        <>
            <div className="progress" style={{ height:'30px'}}>
            <div className="progress-bar flex-row justify-content-center" role="progressbar" style={{width: '33%', borderRadius:'4%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div style={sty} className="d-flex flex-row justify-content-center align-items-center ">
                    <span style={{fontSize:'18px'}}>1</span>
                </div>
            </div>
            </div>


            <div className=" p-3 mt-4 ">

                <form>
                    <div className="form-group row mt-4">
                            <label for="name" className="col-sm-2 col-form-label font-weight-bold">
                                <strong>Name:</strong>
                                </label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder=""   />
                            </div>
                    </div>
                    
                    <div className="form-group row mt-3">
                        <label for="desc" className="col-sm-2 col-form-label">
                            <strong>Description:</strong>
                        </label>
                        <div className="col-sm-10">
                        <textarea className="form-control" id="desc" rows="3"></textarea>
                        </div>               
                    </div>


                    <div className="row mt-3">
                        <div className=" col-md-6">
                            <div> 
                                <label for="type">
                                <strong>Type:</strong>    
                                </label>

                            </div>
                    
                            <div className="form-check form-check-inline mt-1">
                                <input className="form-check-input" type="radio" name="type" id="software" value="software"/>
                                <label className="form-check-label" for="inlineRadio1">Software</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="type" id="hardware" value="hardware"/>
                                <label className="form-check-label" for="inlineRadio2">Hardware</label>
                            </div>
                            
                        </div>

                        <div className=" col-md-6 ">
                            <div> 
                                <label for="privacy">
                                    <strong>Privacy:</strong>
                                    </label>

                            </div>
                    
                            <div className="form-check form-check-inline mt-1">
                                <input className="form-check-input" type="radio" name="privacy" id="public" value="public"/>
                                <label className="form-check-label" for="public">Public</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="privacy" id="private" value="private"/>
                                <label className="form-check-label" for="private">Private</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="privacy" id="university" value="university"/>
                                <label className="form-check-label" for="university">University</label>
                            </div>
                            
                        </div>
                    
                    </div>


                    <div class="form-group row mt-3">
                        <label for="inputPassword" class="col-sm-2 col-form-label">
                            <strong>Tags:</strong>
                            </label>
                        <div class="col-sm-10">
                        <input onChange={Tags} type="text" class="form-control" id="Tag" placeholder=""/>
                        </div>
                        <div className="w-100 text-center">
                            {tags};
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse  mt-3 " >
                        <div className="w-25">
                        <button type="submit" className="btn btn-primary m-auto ">Next</button>

                        </div>
                    </div>


                    </form>



            </div>


           
        </>



    )


}