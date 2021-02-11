import React from "react";
import "./Card.styles.css";
import CrownCard from "./../../../Assets/CrownCard.jpg";
import CrownGif from "./../../../Assets/CrownGif.gif";

export const CardCrown = () => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <img src={CrownCard} alt="logo" className="logo" />
        </div>
        <div className="view back">
          <img src={CrownGif} alt="site" />
        </div>
      </div>
    </section>
  );
};
