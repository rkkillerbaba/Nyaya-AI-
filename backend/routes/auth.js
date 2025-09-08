const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const OTP_STORE = {};
const SECRET = 'demo-secret';

router.post('/request-otp', (req, res) => {
  const { aadhaar, mobile, role } = req.body;
  const identifier = aadhaar || mobile;
  const otp = '123456'; // Mock OTP
  OTP_STORE[identifier] = otp;
  return res.json({ message: 'OTP sent (mock)', otp });
});

router.post('/verify-otp', (req, res) => {
  const { aadhaar, mobile, otp, role } = req.body;
  const identifier = aadhaar || mobile;
  if (OTP_STORE[identifier] === otp) {
    const token = jwt.sign({ identifier, role }, SECRET, { expiresIn: '1h' });
    return res.json({ token, role, user: { id: identifier, role } });
  }
  return res.status(400).json({ message: 'Invalid OTP' });
});

module.exports = router;
