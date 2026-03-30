const express = require('express');
const router = express.Router();   // ✅ THIS WAS MISSING
const db = require('../db');

// GET all students
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM students');

    res.json({
      success: true,
      data: rows
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;   