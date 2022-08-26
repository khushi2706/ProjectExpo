import React from "react";
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

const CollegeId = cookies.get('uTypeId');

class Pop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      redirect:false,
    };
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
    const sendRequest = async () => {
      console.log(this.state.modalInputName);
      const res = await axios
        .post("http://localhost:5000/api/department/add", {
          DepartName:this.state.modalInputName,
          CollegeId : CollegeId
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
          this.state.redirect && <navigate to='/collegedepartments' replace={true}/>
       });
       this.modalClose();
       refreshPage();
    };
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
        title={"+ Add Department"}
        
        />
      </div>
        </a>
        <Modal show={this.state.modal} index={"0"} handleClose={(e) => this.modalClose(e)}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Department Name:</label>
            <div style={{ width: "-webkit-fill-available" }}>
            <input
            className="form-control input-field"
            name="modalInputName"
          
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: mihasan@bvmengineering.ac.in"}
              value={this.state.modalInputName}
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
                // onClick={(e) => this.handleSubmit2(e)}
              />
            </div>
          </div>
          </form>
        </Modal>
      </div>
    );
  }
}

function Popp() {
  return (
    <div>
      <Pop />
    </div>
  );
}

export default Pop;
