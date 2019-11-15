import React, { useState, useEffect } from "react";

import "../../App.css";

function CardDetails({ match }) {
  useEffect(() => {
    fetchCard();
  });

  const [card, setCard] = useState({
    image_uris: ""
  });

  const fetchCard = async () => {
    const fetchCard = await fetch(
      `https://api.scryfall.com/cards/${match.params.id}`
    );

    const card = await fetchCard.json();

    setCard(card);
  };

  return (
    <div>
      <h3>{card.name}</h3>
      <img src={card.image_uris.small} alt="" />
    </div>
  );
}

export default CardDetails;
