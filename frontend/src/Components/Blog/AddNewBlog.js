import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "./TextEditor.css";
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function AddNewBlog() {
    const [blogInfo , setBlogInfo] = useState({
      title: '',
      desc:'',
    });
    const onChangeValue = (e) =>{
      setBlogInfo({
        ...blogInfo,
        [e.target.name]:e.target.value
      })
    }
  
    const onDecs = (val) =>{
      setBlogInfo({
        ...blogInfo,
        desc:val
      })
    }
    const [isError , setError ] = useState(null);

    const addDetails = async(event) =>{
      try {
        event.preventDefault();
        event.persist();
        if(blogInfo.desc.length < 50)
        {
          setError("Add Desc more than 50 char")
        }
        console.log(blogInfo);
      } catch (error) {
        
      }
    }

  return (
  <>
    <div className='container'>
      <div className="row">
        <form onSubmit={addDetails}>
        <div className="form-row">
            <div className="form-group col-md-12">
              <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
              <input type="text" name="title" value={blogInfo.title} onChange={onChangeValue}  className="form-control" placeholder="Title" required />
            </div>
            <div className="clearfix"></div>
            <div className="form-group col-md-12 editor">
            <label htmlFor="" className="fonr-weight-bold">Blog</label>
            {/* <EditorToolbar toolbarId={'t1'}/> */}
            <ReactQuill
             value={blogInfo.desc}
              onChange={onDecs}
              placeholder={"Write something awesome..."}
              // modules={modules('t1')}
              // formats={formats}
            />
            </div>
            {isError !== null && <div className="errors"> {isError} </div>}
            <div className="form-group col-sm-12 text-right">
              <button type="submit" className="btn btn__theme"> Submit  </button>
            </div>

            {
              blogInfo.desc != "" &&
              
              <div dangerouslySetInnerHTML={{__html: blogInfo.desc}} />
            }
         </div>
        </form>
      </div>
    </div>
  </>
  )
}
