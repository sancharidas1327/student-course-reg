const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT
        f.fee_id,
        f.student_id,
        s.name AS student_name,
        f.course_id,
        c.course_name,
        f.amount,
        f.date,
        f.status
      FROM fee f
      JOIN students s ON f.student_id = s.student_id
      JOIN course_catalog c ON f.course_id = c.course_id
      ORDER BY f.date DESC, f.fee_id DESC
    `);

    res.json({
      success: true,
      data: rows
    });
  } catch (err) {
    console.error('Failed to fetch fee records:', err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
