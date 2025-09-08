const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const casesPath = path.join(__dirname, '../../shared/cases.json');
const casesData = JSON.parse(fs.readFileSync(casesPath));

router.get('/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const results = casesData.filter(c => c.title.toLowerCase().includes(q) || c.id.toString() === q);
  res.json(results);
});

router.get('/:id', (req, res) => {
  const caseDetail = casesData.find(c => c.id.toString() === req.params.id);
  if (caseDetail) res.json(caseDetail);
  else res.status(404).json({ message: 'Case not found' });
});

module.exports = router;
