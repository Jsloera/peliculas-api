const { Pelicula } = require('../modules/pelicula');

const getAll = async () => await Pelicula.findAll();

const getById = async (id) => await Pelicula.findByPk(id);

const create = async (data) => await Pelicula.create(data);

const update = async (id, data) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.update(data);
  return pelicula;
};

const remove = async (id) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return pelicula;
};

module.exports = { getAll, getById, create, update, remove };