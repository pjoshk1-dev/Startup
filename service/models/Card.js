import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
    enum: ["red", "orange", "yellow", "green", "blue", "purple"]
  }
});

export default mongoose.model("Card", cardSchema);
