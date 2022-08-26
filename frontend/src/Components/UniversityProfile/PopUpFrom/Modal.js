import React from "react";
import Button from "../../Common/Button"; 

const Modal = ({ handleClose, show, children,index }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className={index==0 ? "modal-containers": "modal-container"}>
        {children}
        <a href="javascript:;" className="modal-close" onClick={handleClose}>
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
        title={"Close"}
          onClick={(e) => this.handleSubmit(e)}
        />
      </div>
        </a>
      </div>
    </div>
  );
};

export default Modal;
