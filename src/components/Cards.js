import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a look at how cool the scanner is</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems src="" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
