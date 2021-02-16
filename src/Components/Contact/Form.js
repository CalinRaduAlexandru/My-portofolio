import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "./Contact.styles.css";
import FormSuccess from "./Form-success";
import Contact from "./Contact";
import spaceship from "./../../Assets/img-2.svg";
import austronaut from "./../../Assets/astronaut2.svg";
import { FaHandRock } from "react-icons/fa";

const Image = styled(motion.img)`
  cursor: grab;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
    margin: 100px;
  }
`;

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
        <div className="form-content-left">
          <img className="form-img" src={spaceship} alt="spaceship" />

          {!isSubmitted ? (
            <Contact submitForm={submitForm} />
          ) : (
            <FormSuccess toggleForm={toggleForm} />
          )}
        </div>
        <div className="austronaut-game">
          <div className="austronaut">
            <Image
              src={austronaut}
              alt="austronaut"
              drag={true}
              dragConstraints={{ left: 0, right: 100, top: 100, bottom: 200 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 5 } }}
            />
          </div>
          <div className="space-container">
            <div className="star s1" id="animate"></div>
            <div className="star s2"></div>
            <div className="star s3"></div>
            <div className="star s4"></div>
            <div className="star s5"></div>
            <div className="star s6" id="animate"></div>
            <div className="star s7"></div>
            <div className="star s8"></div>
            <div className="star s9" id="animate"></div>
            <div className="star s10"></div>
            <div className="shootingstar"></div>
            <div className="shootingstar2"></div>
          </div>
          <div className="austronaut-text">
            <FaHandRock /> <p>Grab the austronaut around!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
