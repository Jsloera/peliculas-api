const express = require('express');
const { logger, validarApiKey } = require('./middlewares');
const peliculasRouter = require('./routes/peliculas');

const app = express();
app.use(express.json());
app.use(logger);
app.use(validarApiKey);

app.use('/peliculas', peliculasRouter);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});