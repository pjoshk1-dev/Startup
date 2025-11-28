// service/index.js
const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON from frontend
app.use(express.json());

// Serve frontend (if stored in ../frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// Mount your auth routes
app.use('/api/auth', authRoutes);

// Test endpoint (optional)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Fallback to index.html for React router (if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});