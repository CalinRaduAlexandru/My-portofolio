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
  max-width: 250px;
  max-height: 250px;
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
        <div className="austronaut">
          <Image
            src={austronaut}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 50, right: 50, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
          />
          <div className="austronaut-game">
            <FaHandRock /> <p>Grab the austronaut around!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
