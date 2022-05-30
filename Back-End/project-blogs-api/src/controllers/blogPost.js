const jwt = require('jsonwebtoken');
const { BlogPost, User, PostCategory, Category } = require('../database/models');
require('dotenv').config();

// Função que busca os dados das categorias no BD
const getCategoriesData = async (postId) => {
  const categories = await PostCategory.findAll({
    attributes: { exclude: ['id'] },
    where: { postId },
  });

  const categoryIds = categories.map((element) => element.dataValues.categoryId);
  const rows = await Category.findAll({ where: { id: categoryIds } });

  return rows;
};

// Adiciona um novo post ao BD
const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const dateNow = new Date().toISOString();

  const token = req.headers.authorization;
  const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

  const newPost = await BlogPost.create({
    title,
    content,
    userId: tokenDecode.data.id,
    published: dateNow,
    updated: dateNow,
  });

  const newPostId = newPost.dataValues.id;

  const postCategoryData = categoryIds.map((id) => {
    const obj = { postId: newPostId, categoryId: id };

    return obj;
  });

  await PostCategory.bulkCreate(postCategoryData);

  return res.status(201).json(newPost.dataValues);
};

// Pega todos os posts no DB junto com as informações de usuário e categorias
const getPosts = async (_req, res) => {
  const posts = await BlogPost.findAll();

  const postsData = await Promise.all(posts.map(async (post) => {
    const user = await User.findOne({ attributes: { exclude: ['password'] },
      where: { id: post.dataValues.userId } });
    
    const postId = post.dataValues.id;

    const rows = await getCategoriesData(postId);

    return { ...post.dataValues,
      user: { id: post.dataValues.userId, ...user.dataValues },
      categories: rows };
  }));

  return res.status(200).json(postsData);
};

// Procura por um post pelo seu ID
const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await BlogPost.findOne({ where: { userId: id } });
  
  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  const user = await User.findOne({ attributes: { exclude: ['password'] },
    where: { id: post.dataValues.userId } });
  
  const postId = post.dataValues.id;

  const rows = await getCategoriesData(postId);
  
  const obj = {
    ...post.dataValues,
    user: { id: post.dataValues.userId, ...user.dataValues },
    categories: rows,
  };
  return res.status(200).json(obj);
};

// Edita os dados de um post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const postUpdated = await BlogPost.findOne({ where: { id } });

  const user = await User.findOne({ attributes: { exclude: ['password'] },
    where: { id: postUpdated.dataValues.userId } });

  const postId = postUpdated.dataValues.id;

  const rows = await getCategoriesData(postId);
  
  const obj = {
    ...postUpdated.dataValues,
    user: { id: postUpdated.dataValues.userId, ...user.dataValues },
    categories: rows,
  };

  return res.status(200).json(obj);
};

// Deleta um post pelo ID
const deletePost = async (req, res) => {
  const { id } = req.params;
  
  await BlogPost.destroy({ where: { id } });

  return res.status(204).json();
};

module.exports = {
  addPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
