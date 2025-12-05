import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './authRoutes.js';

import fs from "fs";
import mongoose from "mongoose";

import cardRoutes from './cardRoutes.js';

// Load dbconfig.json securely
let rawConfig;
try {
  rawConfig = fs.readFileSync("./dbconfig.json");
} catch (err) {
  console.error("ERROR: Missing dbconfig.json file in /service folder");
  process.exit(1);
}

const config = JSON.parse(rawConfig);

// Build the connection string
const mongoUri = `mongodb+srv://${config.username}:${config.password}@${config.hostname}/${config.database}?retryWrites=true&w=majority`;

// Test connection (similar to instructor’s example)
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error(`ERROR: Unable to connect to MongoDB: ${err.message}`);
    process.exit(1);
  });

const app = express();

// ---- Required for ES modules to serve static frontend ----
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---- Middleware ----
app.use(cors());                  // safe because Vite proxies API calls
app.use(express.json());          // allow JSON bodies

// ---- API Routes ----
app.use('/api/auth', authRoutes);
app.use('/api/cards', cardRoutes);

// ---- Static Frontend ----
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all so React Router works on refresh
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// ---- Start Server ----
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
