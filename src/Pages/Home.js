import React, { useState, useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";
import { ScrollTop } from "./ScrollTop";
import Scene from "../Components/Hero/Scene";

const AboutSection = lazy(() => import("../Components/About/About-section"));
const Projects = lazy(() => import("../Components/Projects/Projects"));
const Form = lazy(() => import("../Components/Contact/Form"));

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
      <div style={{ overflowX: "hidden" }}>
        <Scene />
        <Suspense
          fallback={
            <div
              style={{
                background: "#05043d",
                color: "#0d5485",
              }}
            >
              Loading...
            </div>
          }
        >
          <section>
            <AboutSection />
            <Projects />
            <Form id="contact" />
            <Footer />
          </section>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
