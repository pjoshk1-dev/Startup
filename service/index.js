import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/authRoutes.js';

const app = express();

// ---- Required for ES modules to serve static frontend ----
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---- Middleware ----
app.use(cors());                  // safe because Vite proxies API calls
app.use(express.json());          // allow JSON bodies

// ---- API Routes ----
app.use('/api/auth', authRoutes);

// ---- Static Frontend ----
// IMPORTANT: Adjust path to your actual frontend folder.
// Example if your structure is: Startup/client/
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all so React Router works on refresh
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// ---- Start Server ----
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
