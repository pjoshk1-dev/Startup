import React, { useState } from 'react';
import './play.css';

const generateDeck = (count = 20) =>
  Array.from({ length: count }, (_, i) => ({ id: i + 1, name: `Card ${i + 1}` }));

const Play = () => {
  // Initialize a mock deck and a starting hand of 4 cards
  const [deck, setDeck] = useState(generateDeck());
  const [hand, setHand] = useState(deck.slice(0, 4));
  const [remainingDeck, setRemainingDeck] = useState(deck.slice(4));
  const [playArea, setPlayArea] = useState([]);

  const playCard = (card) => {
    // Remove card from hand
    setHand((prevHand) => prevHand.filter((c) => c.id !== card.id));

    // Add to play area
    setPlayArea((prev) => [...prev, card]);

    // Simulate animation delay (e.g. 1 second)
    setTimeout(() => {
      // Remove the played card from the play area
      setPlayArea((prev) => prev.filter((c) => c.id !== card.id));

      // Draw a new card from the deck
      setRemainingDeck((prevDeck) => {
        if (prevDeck.length > 0) {
          const [nextCard, ...rest] = prevDeck;
          setHand((prevHand) => [...prevHand, nextCard]);
          return rest;
        }
        return prevDeck;
      });
    }, 1000); // Adjust delay as needed
  };

  return (
    <div className="play-page">
      {/* Play Area */}
      <div className="play-area">
        {playArea.map((card) => (
          <div key={card.id} className="card tiny">
            {card.name}
          </div>
        ))}
      </div>

      {/* User Hand */}
      <div className="user-hand">
        {hand.map((card) => (
          <div
            key={card.id}
            className="card medium"
            onClick={() => playCard(card)}
          >
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Play;