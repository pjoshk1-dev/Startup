import express from "express";
import Card from "../models/Card.js";

const router = express.Router();

// Allowed colors for random draw
const CARD_COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function getRandomColor() {
  const index = Math.floor(Math.random() * CARD_COLORS.length);
  return CARD_COLORS[index];
}

// POST /api/cards/random  → creates a new card with a random color
router.post("/random", async (req, res) => {
  try {
    const card = new Card({
      color: getRandomColor()
    });

    await card.save();
    res.status(201).json(card);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create card" });
  }
});

export default router;
