import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // plaintext for now (OK for assignment)
  cards: { type: [String], default: [] }       // stores card colors
});

export default mongoose.model("User", userSchema);
