const jwt = require('jsonwebtoken');

const SECRET = 'secreto123';

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

const validarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345') return res.status(401).json({ error: 'API Key inválida' });
  next();
};

const validarToken = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth) return res.status(401).json({ error: 'Token requerido' });
  const token = auth.split(' ')[1]; // Bearer <token>
  try {
    const decoded = jwt.verify(token, SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = { logger, validarApiKey, validarToken, SECRET };