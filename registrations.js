const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT
        rc.reg_id,
        rc.student_id,
        s.name AS student_name,
        rc.course_id,
        c.course_name,
        rc.semester,
        rc.status,
        rc.created_at
      FROM registered_courses rc
      JOIN students s ON rc.student_id = s.student_id
      JOIN course_catalog c ON rc.course_id = c.course_id
      ORDER BY rc.created_at DESC, rc.reg_id DESC
    `);

    res.json({
      success: true,
      data: rows
    });
  } catch (err) {
    console.error('Failed to fetch registrations:', err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
