import React from "react";
import "./Card.styles.css";
import CrownCard from "./../../../Assets/CrownCard.jpg";
import work1 from "./../../../Assets/work1.jpg";

export const CardCrown = () => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <img src={CrownCard} alt="logo" className="logo" />
        </div>
        <div className="view back">
          <img src={work1} alt="site" />
        </div>
      </div>
    </section>
  );
};
