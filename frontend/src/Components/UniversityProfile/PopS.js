import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Common/Button"; 
import Modal from "./PopUpFrom/Modal";
import "./PopUpFrom/styles.css";
import ProfileInputField from "../Profile/ProfileInputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Cookies from 'universal-cookie'

import "./pop.css"
const cookies = new Cookies();

const CollegeId = cookies.get('uTypeId')

class Pop extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      modalObj:"",
      modalDeptName:"",
      modalCredit:"",
      year : "",
      redirect:false,
      dept:[],
      ccode:"",
      deptid:"",
      prof:[],
      profid:'',
      p:{},
      fac:[],
      d:'',
      depart:[]
    };
  }

  componentDidMount() {
    const sendReq = async () => {
        const res = await axios
          .get(`http://localhost:5000/api/department/getByCollgeId/${CollegeId}`)
          .catch((err) => console.log(err));
        const data = await res.data;
        //console.log("Data from API:" + data[0].Fname);
        return data;
      };

   

    
    sendReq().then((data) => {
        this.setState({ dept: data.departments });
      
      console.log(this.state.dept);
    });
   
  }

 


  handleChange(e) {
   
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit2(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  render() {
    const setDprtId = async (e) => {
      const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
    
      // this.state.formValue = e.target.value;
    };
  

    const setSubId = async (e) => {

     this.state.profid = e.target.value;
     console.log("0d0d0d");
      console.log( this.state.profid)
    };

    // const setSubId = async (e) => {
    //   this.state.formValue.SubId = e.target.value;
    //     console.log( this.state.formValue.SubId)
    //   };

      const getDeprtId = async (e) => {
        console.log("depart id: " + e.target.value);
    
        const res = await axios
          .get(
            `http://localhost:5000/api/professor/getByDepartId/${this.state.d}`
          )
          .catch((err) => console.log(err));
        const data = await res.data;
        this.setState(await { depart : data.professors});
        console.log(depart);
      };

    const sendRequest = async () => {
      alert("anjjs");    
        const res = await axios.post("http://localhost:5000/api/subject/add", {
            SubName :this.state.modalInputName,
            SubInfo : this.state.modalObj,
              DepartmentId : this.state.d,
              Year: this.state.year,
              Eligibility: "Must clear all the subject of last sem",
              Objective:this.state.modalObj,
              Credit:this.state.modalCredit,
              CourseCode:this.state.ccode,
              ProfessorId:this.state.profid
          })
          .catch((err) => console.log(err));

        const data = await res.data;  
        console.log(data);

        return data;
      };
      function refreshPage() {
        window.location.reload(false);
      }

      const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(this.state.modalInputName);
        sendRequest()
          .then((data) => console.log(data))
          .then(() => { 
            this.state.redirect && <navigate to='/collegesubject' replace={true}/>
         });
          this.modalClose();
          refreshPage();
      };
   
    const { dept } = this.state;
    const {prof} = this.state;
    const {depart} = this.state;
    return (
       
      <div className="App">
       
        <a href="javascript:;" onClick={(e) => this.modalOpen(e)}>
        <div
        style={{
          marginTop: 20,
          justifyContent: "end",

          display: "flex",
          marginBottom: "50px",
          marginRight: "20px",
        }}
      >
        <Button
        title={"+ Add Subject"}
        
        />
      </div>
        </a>
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            
          <div
          className="facultypop"
        >
         Subject Name
        </div>
            <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalInputName"
              title={"Subject Name"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Machine Learning"}
              value={this.state.modalInputName}
            />
          </div>
          <div
          className="facultypop"
        >
        Objective
        </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalObj"
              title={"Objective:"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Objective to put this subject in your curriculams"}
              value={this.state.modalObj}
            />
          </div>
          <div
          className="facultypop"
        >
          Select Department
        </div>
          { dept && 
          <div className="sign-in-input-field-container">
          <select  className="select" onClick={getDeprtId} onChange={setDprtId} name="d">
            {dept.map((college, index) => {
              return (
                <>
                  <option value={college._id}>{college.DepartName}</option>
                </>
              );
            })}
          </select>
        </div>
        }

        <div
       class="facultypop"
      >
        Select Subject Faculty
      </div>
      { depart && 
        <div className="sign-in-input-field-container">
        <select  className="select" onChange={setSubId} name="profid">
          {depart.map((college, index) => {
            return (
              <>
                <option value={college._id}>{college.Fname}</option>
              </>
            );
          })}
        </select>
      </div>
      }

        <div
       className="facultypop"
      >
        Credit
      </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalCredit"
              title={"Credit"}
            onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: 4"}
              value={this.state.modalCredit}
            />
          </div>
          <div
          className="facultypop"
        >
          Year
        </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="year"
              title={"Applicable to which year?"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: 2"}
              value={this.state.year}
            />
          </div>
          <div
          className="facultypop"
        >
          Course Code
        </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="ccode"
              title={"Course Code"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: 2CP04"}
              value={this.state.ccode}
            />
          </div>
          </div>
          <div className="form-group">
            <div
              style={{
                marginTop: 20,
                justifyContent: "center",

                display: "flex",
              
                marginRight: "20px",
              }}
            >
            <Button
            title={"Submit"}
              // onClick={(e) => this.handleSubmit(e)}
            />
            </div>
          </div>
          </form>
        </Modal>
      </div>
    );
  }
}

function PopS() {
  return (
    <div>
      <Pop />
    </div>
  );
}

export default PopS;
