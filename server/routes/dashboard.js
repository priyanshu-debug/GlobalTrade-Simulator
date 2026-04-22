import express from 'express';
import { DashboardData } from '../data/mockDB.js';

const router = express.Router();

// GET /api/dashboard/stats
router.get('/stats', (req, res) => {
  try {
    // In a real app, you would query MongoDB here. For now, we return mockDB.
    res.json({
      success: true,
      data: DashboardData
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
