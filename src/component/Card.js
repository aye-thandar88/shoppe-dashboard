import React from "react";

const Card = ({ card, percentage, children }) => {
  return (
    <div className="flex flex-col gap-y-4" key={card.id}>
      {children}
      <img src={card.image} />
      <dt className="text-base leading-7 text-gray-600">{card.title}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {card.count} million
      </dd>
    </div>
  );
};

export default Card;
