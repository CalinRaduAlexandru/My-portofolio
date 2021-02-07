import React from "react";
import "./Card.styles.css";
import CrownCard from "./../Assets/CrownCard.jpg";
import work1 from "./../Assets/work1.gif";

export const Card = () => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <img src={CrownCard} alt="crown" className="crown" />
        </div>
        <div className="view back">
          <img src={work1} alt="crown site" />
        </div>
      </div>
    </section>
  );
};
