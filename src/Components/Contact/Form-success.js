import React from "react";
import "./Contact.styles.css";
import success from "./../../Assets/img-3.svg";

const FormSuccess = ({ toggleForm }) => {
  return (
    <div
      className="form-content-right"
      style={{ color: "#3014a3", zIndex: "11" }}
    >
      <h1 className="form-success">
        Thank you for contacting me! I will get back to you in no time!
      </h1>
      <img className="form-img-2" src={success} alt="success" />
      <span className="close-btn" onClick={toggleForm}>
        Return
      </span>
    </div>
  );
};

export default FormSuccess;
