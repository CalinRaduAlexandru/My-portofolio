import React from "react";
import "./Contact.styles.css";
import success from "./../../Assets/img-3.svg";

const FormSuccess = ({ toggleForm }) => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">I have received your request!</h1>
      <img className="form-img-2" src={success} alt="success" />
      <span className="close-btn" onClick={toggleForm}>
        Go back!
      </span>
    </div>
  );
};

export default FormSuccess;
