import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Card";
import './App.css'

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
    <div className="App">
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
    </div>
  );
};

export default App;
