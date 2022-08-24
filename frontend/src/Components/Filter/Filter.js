import React, { useState } from "react";
import Filterlist from "../../Assets/Images/Filter list.svg";
import "./Filter.css";
import TagImage from "../../Assets/Images/Tags.svg";
import CodeImage from "../../Assets/Images/Code.svg";
import calender from "../../Assets/Images/Calendar.svg";
import university from "../../Assets/Images/University.svg";
import CancelIcon from '@mui/icons-material/Cancel';

export default function Filter() {
    const tag= [];
    const lan=[];
    const uni=[];
    const time=[];
    const [list,setList] = useState(tag);
   const [list1,setList1] =useState(uni);

   const [list2,setList2] =useState(time);

   const [list3,setList3] =useState(lan);
   const cancell = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq = [...list];
    mq.splice(idd,1);
    setList(mq)
   }

   const cancell1 = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq1 = [...list1];
    mq1.splice(idd,1);
    setList1(mq1)

   }

   const cancell2 = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq2 = [...list2];
    mq2.splice(idd,1);
    setList2(mq2)

   }

   const cancell3 = (e) => {
    const idd = e.currentTarget.id;
    console.log(idd);
    const mq3 = [...list3];
    mq3.splice(idd,1);
    setList1(mq3)
   }




    const [inputt,setInputt] = useState("");
    const [inputt1,setInputt1] = useState("");
    const [inputt2,setInputt2] = useState("");
    const [inputt3,setInputt3] = useState("");
    const [f1,setf1] = useState("false");
    const handleAdd = () => {
        
if((list.includes(inputt))==false){
    setList((prev)=>[
        ...prev,
        inputt
      ])
      setf1("true")
}
if((list1.includes(inputt1))==false){
    setList1((prev)=>[
        ...prev,
        inputt1
      ])
}
if((list2.includes(inputt2))==false){
    setList2((prev)=>[
        ...prev,
        inputt2
      ])
}
if((list3.includes(inputt3))==false){
    setList3((prev)=>[
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
              <div className="tagName">Type</div>
            </div>
            <div>
            <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
            <div className="sign-in-input-field-container">
            <select className="select" class="chg" onChange={e =>setInputt1(e.target.value)} name="typeid">
                    <option value={0} >Software</option>
                    <option value={1} >Hardware</option>
            </select>
          </div>
            </div>
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
          
          {  list.map((ele,index) => {
            return (
                <span className="tag auth-Tag" id={index} onClick={cancell}>{ele} <CancelIcon  className="cancelitem"/></span>
             
            );
          })}
          {list1.map((ele,index) => {
            return (
                <span className="tag auth-Tag" id={index} onClick={cancell1}>{ele} <CancelIcon  className="cancelitem"/></span>
             
            );
          })}
          {list2.map((ele,index) => {
            return (
                <span className="tag auth-Tag" id={index} onClick={cancell2}>{ele} <CancelIcon  className="cancelitem"/></span>
             
            );
          })}
          {list3.map((ele,index) => {
            return (
                <span className="tag auth-Tag" id={index} onClick={cancell3}>{ele} <CancelIcon  className="cancelitem"/></span>
             
            );
          })}
          
        
          </div>
        </div>
      </div>
    </div>
  );
}