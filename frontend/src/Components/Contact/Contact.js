import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../footer/Footer";

import "./Contact.css";

const emailIconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="dodgerBlue" 
    class="bi bi-envelope-fill"
    viewBox="0 0 16 16"
  >
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
  </svg>
);

const contactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="dodgerBlue"
    class="bi bi-person-lines-fill"
    viewBox="0 0 16 16"
  >
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
  </svg>
);

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
    <Header index="4"/>
        <div className=" cddd" style={{textAlign:"center"}}>Send As A Message</div>
      <div className="mb-4 d-flex justify-content-evenly flex-wrap">
        <div className="left my-4">
          <form action="">
            <div className="inputt my-3">
              <label htmlFor="" className="ll form-label">
              <h5 className="ll">
                Email Id:
                </h5>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="inputt my-3">
              <label htmlFor="" className="ll form-label">
              <h5 className="ll">
                Message:
                </h5>
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="msg form-control"
              />
            </div>

            <input
              type="submit"
              value="Send"
              className=" cc search-bar-button "
            />
          </form>
        </div>
        <div className="right">
          <img src="img/contact.jpg" alt="" width="450" />
        </div>
      </div>

      <div className="d-flex flex-row justify-content-around flex-wrap">
        <h5 className="my-1 mb-4">
          {contactIcon()} <h5 className="fw-bold">Contact No:</h5> +91
         2587413697
        </h5>
        <h5 className="my-1 mb-4">
          {emailIconSVG()} <h5 className="fw-bold">Email:</h5>{" "}
          projectexpo@gmail.com
        </h5>
      </div>

     <Footer/>
    </div>
  );
};

export default Contact;
