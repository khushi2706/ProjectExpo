import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Common/Button"; 
import Modal from "./PopUpFrom/Modal";
import "./PopUpFrom/styles.css";
import ProfileInputField from "../Profile/ProfileInputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./pop.css"

import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";

const cookies = new Cookies();
const UserType = cookies.get('userType');

const CollegeId = cookies.get('uTypeId')

class Pop extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      modalEmail:"",
      modalDeptName:"",
      modalPost:"",
      modalImgLink : "",
      redirect:false,
      dept:[],
      deptid:""
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
          .post("http://localhost:5000/api/professor/add", {
            DepartName: this.state.modalInputName,  
            Email : this.state.modalEmail,
            Pass : "Ankit",
            Fname: this.state.modalInputName,
            LName: "Vegad",  
            Degree: ["BTECH in Computer", "Phd ib Business"],
            DoB : "11/02/2002" ,
            Gender: this.state.modalPost,
            DepartmentId: this.state.deptid,
            ProfileImg:this.state.modalImgLink,
            PubEmail:this.state.modalEmail
          })
          .catch((err) => console.log(err));
        const data = await res.data;
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
            this.state.redirect && <navigate to='/collegefaculty' replace={true}/>
         });
         this.modalClose();
         refreshPage();
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
        title={"+ Add Faculty"}
        
        />
      </div>
        </a>
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            
          <div
          className="facultypop"
        >
          Faculty Name{" "}<span style={{color:"red"}}>*</span>
        </div>
            <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalInputName"
              title={"Faculty Name"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Mohsin Hasan"}
              value={this.state.modalInputName}
            />
          </div>
          <div
          className="facultypop"
        >
          Email{" "}<span style={{color:"red"}}>*</span>
        </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalEmail"
              title={"Email:"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: mihasan@bvmengineering.ac.in"}
              value={this.state.modalEmail}
            />
          </div>
          <div
          className="facultypop"
        >
          Select Department{" "}<span style={{color:"red"}}>*</span>
        </div>
          { dept && 
          <div className="sign-in-input-field-container">
          <select className="select" onChange={(e) => this.handleChange(e)} name="deptid">
            {dept.map((college, index) => {
              return (
                <>
                  <option value={college._id} >{college.DepartName}</option>
                </>
              );
            })}
          </select>
        </div>
        }

        <div
        className="facultypop"

      >
        Post of Faculty{" "}<span style={{color:"red"}}>*</span>
      </div>
      
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalPost"
              title={"Post of Faculty"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Assistant Professor"}
              value={this.state.modalPost}
            />
          </div>
          <div
          className="facultypop"
        >
         Image Link
        </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalImgLink"
              title={"Faculty Photo Link"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Upload link like drive link"}
              value={this.state.modalImgLink}
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

function PopF() {
  return (
    <div>
      <Pop />
    </div>
  );
}

export default PopF;
