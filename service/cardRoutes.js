import express from "express";
import User from "./User.js";
import authMiddleware from "./auth.js";

const router = express.Router();

// Require authentication for all card routes
router.use(authMiddleware);

// Allowed card colors
const CARD_COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function getRandomColor() {
  return CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];
}

// GET /api/cards  → return the user's cards
router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user.cards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load cards" });
  }
});

// POST /api/cards/add  → add a random color to user.cards
router.post("/add", async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    const color = getRandomColor();

    user.cards.push(color);
    await user.save();

    res.status(201).json({ color });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add card" });
  }
});

export default router;
