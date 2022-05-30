const Joi = require('joi');
const { Category } = require('../database/models');

const POST = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
});

// Valida o título e o conteúdo da postagem
const validateDataPost = (req, res, next) => {
  const { title, content } = req.body;

  const { error } = POST.validate({ title, content });

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

// Valida as categorias da postagem
const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const categoryExist = await Category.findAndCountAll({ where: { id: [categoryIds] } });

  if (categoryExist.count === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateDataPost,
  validateCategory,
};
