const express = require('express');
const router = express.Router();
const service = require('../services/peliculaService');

router.get('/', async (req, res) => {
  const peliculas = await service.getAll();
  res.json(peliculas);
});

router.get('/:id', async (req, res) => {
  const pelicula = await service.getById(req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'Película no encontrada' });
  res.json(pelicula);
});

router.post('/', async (req, res) => {
  const pelicula = await service.create(req.body);
  res.json(pelicula);
});

router.put('/:id', async (req, res) => {
  const pelicula = await service.update(req.params.id, req.body);
  if (!pelicula) return res.status(404).json({ error: 'Película no encontrada' });
  res.json(pelicula);
});

router.delete('/:id', async (req, res) => {
  const pelicula = await service.remove(req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'Película no encontrada' });
  res.json({ mensaje: 'Película eliminada correctamente' });
});

module.exports = router;