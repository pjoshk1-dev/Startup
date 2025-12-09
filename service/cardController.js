import User from "./User.js";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

// POST /api/cards/random  (requires auth)
// Adds a random card color to the logged-in user's card list.
export async function drawRandomCard(req, res) {
  try {
    const userId = req.userId;

    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { cards: color } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      added: color,
      cards: updatedUser.cards
    });
  } catch (err) {
    console.error("Error adding card:", err);
    res.status(500).json({ message: "Could not add card" });
  }
}

// GET /api/cards  (requires auth)
// Returns the user's card list
export async function getCards(req, res) {
  try {
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.cards);
  } catch (err) {
    console.error("Error fetching cards:", err);
    res.status(500).json({ message: "Could not load cards" });
  }
}
