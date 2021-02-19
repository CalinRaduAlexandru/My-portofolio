import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { animateScroll as scroll } from "react-scroll";
import { RocketWrapper, Rocket, Up } from "./ScrollTop-elements";

export const ScrollTop = () => {
  const { y: pageYOffSet } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const goTop = () => {
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
    <RocketWrapper onClick={goTop}>
      <Rocket />
      <Up>Up</Up>
    </RocketWrapper>
  );
};
