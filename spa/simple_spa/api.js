const express = require('express');
const router = express.Router();

app.get('/api', (req, res) => {
    res.send({ method: 'GET' });
});
