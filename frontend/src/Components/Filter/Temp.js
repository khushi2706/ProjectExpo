
import React, { useState } from "react";
import Filterlist from "../../Assets/Images/Filter list.svg";
import "./Filter.css";
import TagImage from "../../Assets/Images/Tags.svg";
import CodeImage from "../../Assets/Images/Code.svg";
import calender from "../../Assets/Images/Calendar.svg";
import university from "../../Assets/Images/University.svg";
import CancelIcon from '@mui/icons-material/Cancel';

export default function Filter() {
    const tag= ["Web"];
    const lan=["React"];
    const uni=["BVM"];
    const time=["2022"];
    const [list,setList] = useState(tag);




    const [inputt,setInputt] = useState("");
    const [inputt1,setInputt1] = useState("");
    const [inputt2,setInputt2] = useState("");
    const [inputt3,setInputt3] = useState("");
   
    const handleAdd = () => {
        
if((list.includes(inputt))==false){
    setList((prev)=>[
        ...prev,
        inputt
      ])
      
}
if((list.includes(inputt1))==false){
    setList((prev)=>[
        ...prev,
        inputt1
      ])
}
if((list.includes(inputt2))==false){
    setList((prev)=>[
        ...prev,
        inputt2
      ])
}
if((list.includes(inputt3))==false){
    setList((prev)=>[
        ...prev,
        inputt3
      ])
}
}
  return (
    <div className="AppliedFilter">

   
      <div className="applied"></div>
      <div className="filter">
        <div className="title">
          <img src={Filterlist} alt="" className="titleImage" />
          <div className="title_information">Short filters</div>
        </div>

        <div className="AlltagListOption alll">
          <div className="tagListOption tagflex">
            <div>
              <img src={TagImage} alt="" className="tagImage" />
              <div className="tagName">Tag</div>
            </div>
            <div>
              <input type="text" className="inputfilter inputfil" onChange={e =>setInputt(e.target.value)} placeholder="Ex. Web"/>
            </div>
          </div>

          <div className="tagListOption tagflex">
            <div>
              <img src={university} alt="" className="tagImage" />
              <div className="tagName">University</div>
            </div>
            <div>
              <input type="text" className="inputfilter inputfil" onChange={e =>setInputt1(e.target.value)} placeholder="Ex. BVM"/>
            </div>
          </div>

          <div className="tagListOption tagflex">
            <div>
              <img src={calender} className="tagImage" />
              <div className="tagName">Time Frame</div>
            </div>
            <div>
              <input type="text" className="inputfilter inputfil"  onChange={e =>setInputt2(e.target.value)} placeholder="Ex. 2020"/>
            </div>
          </div>

          <div className="tagListOption tagflex">
            <div>
              <img src={CodeImage} className="tagImage" />
              <div className="tagName">Language</div>
            </div>
            <div>
              <input type="text" className="inputfilter inputfil" onChange={e =>setInputt3(e.target.value)} placeholder="Ex. JAVA"/>
            </div>
          </div>

          <div className="tagflex applydiv">
            <button className="search-bar-button filterbtn" onClick={handleAdd}  id="searchinput ">
              Apply
            </button>
          </div>

          <div className="tagflex applydiv selectedtag">
          
          { list.length >0 &&   list.map((ele,key) => {
            return (
                <span className="tag auth-Tag" key={key}>{ele}  <CancelIcon  className="cancelitem"/></span>
             
            );
          })}
          
          {
            flag=="true" && 
            ( <h4 href='' className=" tagofsearch" >
            {searchinput} <CancelIcon onClick={cancelItem} className="cancelitem"/>
            </h4>)
           } 
        
          </div>
        </div>
      </div>
    </div>
  );
}
