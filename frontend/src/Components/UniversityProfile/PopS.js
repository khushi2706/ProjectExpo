import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Common/Button"; 
import Modal from "./PopUpFrom/Modal";
import "./PopUpFrom/styles.css";
import ProfileInputField from "../Profile/ProfileInputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      deptid:""
    };
  }

  componentDidMount() {
    const sendReq = async () => {
        const res = await axios
          .get(`http://localhost:5000/api/department/getByCollgeId/62f8724e92cfa9015a3befc9`)
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
  
  handleSubmit(e) {
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
   
    
    const sendRequest = async () => {
        const res = await axios
          .post("http://localhost:5000/api/subject/add", {
            SubName :this.state.modalInputName,
            SubInfo : this.state.modalObj,
              DepartmentId : this.state.deptid,
              Year: this.state.year,
              Eligibility: "Must clear all the subject of last sem",
              Objective:this.state.modalObj,
              Credit:this.state.modalCredit,
              CourseCode:this.state.ccode,
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data);

        return data;
      };
      const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(this.state.modalInputName);
        sendRequest()
          .then((data) => console.log(data))
          .then(() => { 
            this.state.redirect && <navigate to='/collegesubject' replace={true}/>
         });
      };
   
    const { dept } = this.state;
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
            
            
            <div style={{ width: "-webkit-fill-available" }}>
            <ProfileInputField
            className="form-control"
            name="modalInputName"
              title={"Subject Name"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Machine Learning"}
              value={this.state.modalInputName}
            />
          </div>

          <div style={{ width: "-webkit-fill-available" }}>
            <ProfileInputField
            className="form-control"
            name="modalObj"
              title={"Objective:"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Objective to put this subject in your curriculams"}
              value={this.state.modalObj}
            />
          </div>
          <div
          style={{
            color: "#808080",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          Select Department
        </div>
          { dept && 
          <div className="sign-in-input-field-container">
          <select onChange={(e) => this.handleChange(e)} name="deptid">
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


          <div style={{ width: "-webkit-fill-available" }}>
            <ProfileInputField
            className="form-control"
            name="modalCredit"
              title={"Credit"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: 4"}
              value={this.state.modalCredit}
            />
          </div>

          <div style={{ width: "-webkit-fill-available" }}>
            <ProfileInputField
            className="form-control"
            name="year"
              title={"Applicable to which year?"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: 2"}
              value={this.state.year}
            />
          </div>

          <div style={{ width: "-webkit-fill-available" }}>
            <ProfileInputField
            className="form-control"
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
                marginBottom: "50px",
                marginRight: "20px",
              }}
            >
              <Button
              title={"Submit"}
                onClick={(e) => this.handleSubmit(e)}
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
