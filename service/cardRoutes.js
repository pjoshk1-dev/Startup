import express from "express";
import auth from "./auth.js";  // or authMiddleware.js depending on your file
import { drawRandomCard, getCards } from "./cardController.js";

const router = express.Router();

router.post("/random", auth, drawRandomCard);
router.get("/", auth, getCards);

export default router;
