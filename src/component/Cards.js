import React from "react";
import Card from "./Card";

const Cards = ({ cards, children }) => {
  return cards.map((card) => (
    <div className="px-6 lg:px-8 py-4 border-2 rounded-lg shadow-md my-3">
      {<Card card={card} children={children} />}
    </div>
  ));
};

export default Cards;
