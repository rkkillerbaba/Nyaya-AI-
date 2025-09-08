const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const caseRoutes = require('./routes/cases');
const aiRoutes = require('./routes/ai');
const employeeRoutes = require('./routes/employee');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/cases', caseRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/employee', employeeRoutes);

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
