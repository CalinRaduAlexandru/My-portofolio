import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeroSection from "../Components/Hero/Hero-section";
import AboutSection from "../Components/About/About-section";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import { homeObjOne } from "../Components/About/Data";
import Form from "../Components/Contact/Form";
import { Loader } from "./Loading";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {loading ? (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
          <HeroSection />
          <AboutSection {...homeObjOne} />
          <Projects />
          <Form id="contact" />
          <Footer />{" "}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
