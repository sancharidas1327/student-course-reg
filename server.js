const express = require('express');
const cors    = require('cors');
const path    = require('path');
require('dotenv').config();

const studentsRouter      = require('./routes/students');
const coursesRouter       = require('./routes/courses');
const registrationsRouter = require('./routes/registrations');
const feesRouter          = require('./routes/fees');
const adminRouter         = require('./routes/admin');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ── API Routes ────────────────────────────────────────────────
app.use('/api/students',      studentsRouter);
app.use('/api/courses',       coursesRouter);
app.use('/api/registrations', registrationsRouter);
app.use('/api/fees',          feesRouter);
app.use('/api/admin',         adminRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running', timestamp: new Date() });
});

// Catch-all → serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server running at http://localhost:${PORT}`);
  console.log(`📦  API base: http://localhost:${PORT}/api`);
});
