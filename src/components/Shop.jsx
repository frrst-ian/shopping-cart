import { Card } from "./Card";
import { useState, useEffect } from "react";
import "./Shop.css";
export const Shop = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=10"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setLoading(false);
      setCards(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetch", error);
      setError(error.message);
      setLoading(false);
    }
  };
  if (loading) return <div className="load-txt">Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
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
