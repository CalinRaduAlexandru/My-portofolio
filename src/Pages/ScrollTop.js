import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { animateScroll as scroll } from "react-scroll";
import rocket from "./../Assets/rocket.svg";
import { RocketWrapper, Rocket } from "./ScrollTop-elements";

export const ScrollTop = () => {
  const { y: pageYOffSet } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (pageYOffSet > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffSet]);

  if (!visible) {
    return false;
  }

  return (
    <RocketWrapper onClick={toggleHome}>
      <Rocket />
      <h3>Up</h3>
    </RocketWrapper>
  );
};
