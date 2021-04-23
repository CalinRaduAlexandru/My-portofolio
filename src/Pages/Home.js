import React, { useState, useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";
import { ScrollTop } from "./ScrollTop";
import Scene from "../Components/Hero/Scene";
import "./home.styles.css";

const AboutSection = lazy(() => import("../Components/About/About-section"));
const Projects = lazy(() => import("../Components/Projects/Projects"));
const Form = lazy(() => import("../Components/Contact/Form"));

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease" });
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ScrollTop />
      <div className="home">
        <Scene />
        <Suspense
          fallback={
            <div
              style={{
                background: "#7155e2",
                color: "#3014a3",
              }}
            >
              Loading...
            </div>
          }
        >
          <section>
            <AboutSection />
            <Projects />
            <Form />
            <Footer />
          </section>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
