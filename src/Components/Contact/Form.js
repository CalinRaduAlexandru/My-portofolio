import React, { useState } from "react";
import "./Contact.styles.css";
import FormSuccess from "./Form-success";
import Contact from "./Contact";
import "aos/dist/aos.css";
import hand from "./../../Assets/HandLetter.png";
import splash from "./../../Assets/splash.png";

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
      <div className="form-container" id="contact">
        <div className="handWrap" data-aos="fade-right" data-aos-delay="200">
          <img src={hand} alt="hand" width="585px" className="hand" />
        </div>
        <img src={splash} alt="splash" className="splash" />
        <div className="form-content-left">
          {!isSubmitted ? (
            <Contact submitForm={submitForm} />
          ) : (
            <FormSuccess toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
