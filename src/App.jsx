import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Card";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=10"
      );
      const data = await response.json();

      setCards(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetch", error);
    }
  };

  return (
    <div className="card-wrapper">
      {cards.map((card) => (
        <Card key={card.id} card={card}>
          <img src={card.image} alt={card.title} className="product-image" />
          <h3>{card.title}</h3>
          <p>{card.price}</p>
          <p>
            Rating: {card.rating?.rate} ({card.rating?.count} reviews)
          </p>
        </Card>
      ))}
    </div>
  );
};

export default App;
