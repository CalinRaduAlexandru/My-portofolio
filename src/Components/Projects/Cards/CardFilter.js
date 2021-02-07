import React from "react";
import "./Card.styles.css";
import filtercard from "./../../../Assets/filtercard.jpg";
import work2 from "./../../../Assets/work2.gif";

export const CardFilter = () => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <img src={filtercard} alt="logo" className="logo" />
        </div>
        <div className="view back">
          <img src={work2} alt="logo site" />
        </div>
      </div>
    </section>
  );
};
