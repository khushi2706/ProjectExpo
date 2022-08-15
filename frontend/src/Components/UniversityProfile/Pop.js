import React from "react";
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
      console.log(this.state.modalInputName);
      const res = await axios
        .post("http://localhost:5000/api/department/add", {
          DepartName: "computer",
          CollegeId : "62f6135b8c07d28ed759794e"
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };
    const handleSubmit = (e) => {
      
      e.preventDefault();
      console.log(this.state.modalInputName);
      sendRequest()
        .then((data) => console.log(data))
        .then(() => { 
          this.state.redirect && <navigate to='/collegedepartments' replace={true}/>
       });
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
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Department Name:</label>
            
            <div style={{ width: "-webkit-fill-available" }}>
            <ProfileInputField
            className="form-control"
            name="modalInputName"
              title={"Department Name"}
              onChange={(e) => this.handleChange(e)}
              placeholder={"Ex: Birla Vishwakarma Mahavidyalaya"}
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

function Popp() {
  return (
    <div>
      <Pop />
    </div>
  );
}

export default Pop;
