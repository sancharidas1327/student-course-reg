const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM admin ORDER BY admin_id');

    res.json({
      success: true,
      data: rows
    });
  } catch (err) {
    console.error('Failed to fetch admins:', err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
