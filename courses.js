const express = require('express');
const router = express.Router();   // ✅ REQUIRED
const db = require('../db');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM course_catalog');

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

module.exports = router;   // ✅ REQUIRED