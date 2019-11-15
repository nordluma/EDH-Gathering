import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../App.css";

function Cards() {
  useEffect(() => {
    fetchAllCards();
  }, []);

  const [cards, setCards] = useState([{}]);

  const fetchAllCards = async () => {
    const cardData = await fetch("https://api.scryfall.com/cards?page=1");

    const cards = await cardData.json();

    console.log(cards);

    setCards(cards.data);
  };

  return (
    <div>
      {cards.map(card => (
        <h3 key={card.id}>
          <Link to={`/cards/${card.id}`}>{card.name}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Cards;
