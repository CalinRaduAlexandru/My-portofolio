import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeroSection from "../Components/Hero/Hero-section";
import AboutSection from "../Components/About/About-section";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import { homeObjOne } from "../Components/About/Data";
import Form from "../Components/Contact/Form";
import Resume from "../Components/Resume/Resume";

const RESUME_STORAGE_KEY = "resume-storage-key";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resume, setResume] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleResume = () => {
    setResume(!resume);
  };

  useEffect(() => {
    const storageResume = JSON.parse(localStorage.getItem(RESUME_STORAGE_KEY));
    if (storageResume) setResume(storageResume);
  }, []);

  useEffect(() => {
    localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(resume));
  }, [resume]);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      {resume ? (
        <Resume toggleResume={toggleResume} id="about2" />
      ) : (
        <AboutSection {...homeObjOne} toggleResume={toggleResume} />
      )}
      <Projects />
      <Form id="contact" />
      <Footer />
    </>
  );
};

export default Home;
