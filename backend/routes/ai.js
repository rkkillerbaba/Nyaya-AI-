const express = require('express');
const router = express.Router();

router.post('/analyze', (req, res) => {
  const { caseInfo } = req.body;
  res.json({
    verdictProb: Math.random().toFixed(2),
    relatedLaws: ['IPC 302', 'CrPC 161'],
    suggestions: ['Gather more witness statements', 'Check for digital evidence']
  });
});

module.exports = router;
