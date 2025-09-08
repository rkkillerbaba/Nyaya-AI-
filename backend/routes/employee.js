const express = require('express');
const router = express.Router();

let filings = [];

router.post('/create-docket', (req, res) => {
  const { caseId, description } = req.body;
  const docket = { id: filings.length + 1, caseId, description, timestamp: new Date() };
  filings.push(docket);
  res.json(docket);
});

router.get('/list-filings', (req, res) => {
  res.json(filings);
});

router.post('/anchor-to-chain', (req, res) => {
  res.json({ message: 'Order anchored to blockchain (mock)' });
});

module.exports = router;
