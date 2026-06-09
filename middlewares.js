const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

const validarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345') return res.status(401).json({ error: 'API Key inválida' });
  next();
};

module.exports = { logger, validarApiKey };