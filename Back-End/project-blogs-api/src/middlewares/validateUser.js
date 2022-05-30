const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User, BlogPost } = require('../database/models');
require('dotenv').config();

const validateUserExists = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user !== null) {
        return res.status(409).json({ message: 'User already registered' });
    }
    next();
};

const USER = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateDataUser = (req, res, next) => {
    const { displayName, email, password } = req.body;

    const { error } = USER.validate({ displayName, email, password });

    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

const authorizeUser = async (req, res, next) => {
    const { id } = req.params;

    const token = req.headers.authorization;
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    const post = await BlogPost.findOne({ where: { id } });

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    if (post.dataValues.userId !== tokenDecode.data.id) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    next();
};

module.exports = {
    validateUserExists,
    validateDataUser,
    authorizeUser,
}; 
