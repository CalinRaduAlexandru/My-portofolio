import React, { useState, useRef } from "react";
import "./Title.styles.css";

const Title = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const titleContainer = useRef(null);
  const maskStyle = {
    "--maskX": x,
    "--maskY": y,
  };

  const _onMouseMove = (e) => {
    const width = titleContainer.current.clientWidth;
    const height = titleContainer.current.clientHeight;
    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;
    // console.log(Math.floor(oX), Math.floor(oY));
    setX(oX);
    setY(oY);
  };

  const _onMouseOut = () => {
    setX(0);
    setY(0);
  };
  return (
    <div>
      <div
        className="titleContainer"
        onMouseMove={_onMouseMove}
        onMouseOut={_onMouseOut}
        ref={titleContainer}
        style={maskStyle}
      >
        <div className="titleWrapper">
          <h1>
            Radu Călin <br /> Portfolio.
          </h1>
        </div>
        <div className="titleWrapper cloneWrapper">
          <h1>
            Radu Călin <br /> Portfolio.
          </h1>
        </div>
      </div>
      <span className="profesion">Web & Mobile Developer</span>
      <div className="wrapper">
        <div className="static-txt">I'm a</div>

        <ul className="dynamic-txts">
          <li>
            <span>Web Developer</span>
          </li>
          <li>
            <span>Web Designer</span>
          </li>
          <li>
            <span>Mobile Develop</span>
          </li>
          <li>
            <span>Back-end Dev</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Title;
