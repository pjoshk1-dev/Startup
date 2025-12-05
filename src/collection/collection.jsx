import React, { useState, useEffect } from "react";
import "./collection.css";

const Collection = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load user's cards when component mounts
  useEffect(() => {
    async function loadCards() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No auth token — user may not be logged in");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/cards", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          console.error("Failed to fetch cards");
          setLoading(false);
          return;
        }

        const data = await res.json(); // array of color strings
        setCards(data);
      } catch (err) {
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, []);

  // Add a random card
  async function addCard() {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("/api/cards/add", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        console.error("Could not add card");
        return;
      }

      const data = await res.json(); // { color: "green" }
      setCards((prev) => [...prev, data.color]);
    } catch (err) {
      console.error("Error adding card:", err);
    }
  }

  if (loading) return <p>Loading your collection...</p>;

  return (
    <div className="content">
      <main>
        {/* Add card button */}
        <button
          onClick={addCard}
          className="add-card-button"
          style={{ marginBottom: "10px" }}
        >
          Add Random Card
        </button>

        <p>Deck - {cards.length}/30</p>

        <div className="card-grid" id="deck">
          {cards.map((color, index) => (
            <div
              key={index}
              className="card"
              style={{
                backgroundColor: color,
                color: "white",
                border: "2px solid black",
              }}
            >
              {color.toUpperCase()}
            </div>
          ))}
        </div>

        <p>Collection - {cards.length}/30</p>
      </main>
    </div>
  );
};

export default Collection;
