import React from "react";
import "./Card.styles.css";
import front from "./../../../Assets/front.jpg";
import searchFaceApp from "./../../../Assets/search-face-app.gif";

export const CardSearch = () => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <img src={front} alt="logo" className="logo" />
        </div>
        <div className="view back">
          <img src={searchFaceApp} alt="logo site" />
        </div>
      </div>
    </section>
  );
};
