import React from "react";
import "./Card.styles.css";
import gratefulLogo from "./../../../Assets/gratefulLogo.jpg";
import gratefulGIF from "./../../../Assets/gratefulGIF.gif";

export const CardGrateful = () => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <img src={gratefulLogo} alt="logo" className="logo" />
        </div>
        <div className="view back">
          <img src={gratefulGIF} alt="logo site" />
        </div>
      </div>
    </section>
  );
};
