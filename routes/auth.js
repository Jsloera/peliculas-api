const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middlewares');

const USUARIO = { username: 'Samuel', password: '1234' };

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== USUARIO.username || password !== USUARIO.password) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;