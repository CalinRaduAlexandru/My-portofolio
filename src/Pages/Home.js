import React, { useState, useEffect } from "react";
import Aos from "aos";
import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import AboutSection from "../Components/About/About-section";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import { homeObjOne } from "../Components/About/Data";
import { ScrollTop } from "./ScrollTop";
import Form from "../Components/Contact/Form";
import Scene from "../Components/Hero/Scene";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ dureaction: 4000, easing: "ease" });
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ScrollTop />
      <Scene />
      <AboutSection {...homeObjOne} />
      <Projects />
      <Form id="contact" />
      <Footer />
    </>
  );
};

export default Home;
