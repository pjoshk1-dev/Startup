import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },

  // User's collected cards (stored as simple color strings)
  cards: {
    type: [String],
    default: [],
    enum: ["red", "orange", "yellow", "green", "blue", "purple"]
  }
});

export default mongoose.model("User", userSchema);
