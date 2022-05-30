const { Category } = require('../database/models');

// Adiciona uma nova categoria ao BD
const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name || name === '') return res.status(400).json({ message: '"name" is required' });

  const newCategory = await Category.create({ name });

  const categoryData = newCategory.dataValues;

  return res.status(201).json(categoryData);
};

// Busca todas as categorias no BD
const getCategories = async (_req, res) => {
  const categories = await Category.findAll();

  return res.status(200).json(categories);
};

module.exports = {
  addCategory,
  getCategories,
};
