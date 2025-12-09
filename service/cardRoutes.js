import express from "express";
import authMiddleware from "./auth.js";
import { drawRandomCard, getCards } from "./cardController.js";

const router = express.Router();

router.post("/random", authMiddleware, drawRandomCard);
router.get("/", authMiddleware, getCards);

export default router;
