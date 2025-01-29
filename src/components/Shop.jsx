import { Card } from "./Card";
import { useState, useEffect } from "react";
import "./Shop.css";
export const Shop = () => {
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
    <div className="card-list">
      <h1>Electriko Shop</h1>
      <div className="card-wrapper">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            image={card.image}
            title={card.title}
            price={card.price}
            rating={card.rating}
          ></Card>
        ))}
      </div>
    </div>
  );
};
