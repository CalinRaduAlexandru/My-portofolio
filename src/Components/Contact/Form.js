import React, { useState } from "react";
import "./Contact.styles.css";
import FormSuccess from "./Form-success";
import Contact from "./Contact";
import spaceship from "./../../Assets/img-2.svg";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  function toggleForm() {
    setIsSubmitted(false);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={spaceship} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <Contact submitForm={submitForm} />
        ) : (
          <FormSuccess toggleForm={toggleForm} />
        )}
      </div>
    </>
  );
};

export default Form;
