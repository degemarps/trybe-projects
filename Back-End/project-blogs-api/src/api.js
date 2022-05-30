const express = require('express');
const login = require('./controllers/login');
const {
  validateUserExists,
  validateDataUser,
  authorizeUser } = require('./middlewares/validateUser');
const user = require('./controllers/user');
const tokenAuth = require('./middlewares/validateToken');
const category = require('./controllers/category');
const { validateDataPost, validateCategory } = require('./middlewares/validateBlogPost');
const blogPost = require('./controllers/blogPost');

const app = express();

app.use(express.json());

app.post('/login', login.loginUser);

app.post('/user', validateDataUser, validateUserExists, user.addUser);

app.get('/user', tokenAuth.validateToken, user.getUsers);

app.get('/user/:id', tokenAuth.validateToken, user.getUserById);

app.post('/categories', tokenAuth.validateToken, category.addCategory);

app.get('/categories', tokenAuth.validateToken, category.getCategories);

app.post('/post', tokenAuth.validateToken, validateDataPost, validateCategory, blogPost.addPost);

app.get('/post', tokenAuth.validateToken, blogPost.getPosts);

app.get('/post/:id', tokenAuth.validateToken, blogPost.getPostById);

app.put('/post/:id', tokenAuth.validateToken, validateDataPost, authorizeUser, blogPost.updatePost);

app.delete('/post/:id', tokenAuth.validateToken, authorizeUser, blogPost.deletePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
