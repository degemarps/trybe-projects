const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

// Função para adicionar o novo usuário ao BD
const addUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await User.create({ displayName, email, password, image });

    const userData = newUser.dataValues;

    const { password: passBD, ...userWithoutPass } = userData;

    const token = generateToken(userWithoutPass);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

// Busca todos os usuários
const getUsers = async (_req, res) => {
  const users = await User.findAll();

  const usersWithoutPassword = users.map((element) => {
    console.log(element.dataValues);
    const { password: passBD, ...userWithoutPass } = element.dataValues;
    return userWithoutPass;
  });

  return res.status(200).json(usersWithoutPassword);
};

// Busca usuário pelo ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  const { password: passBD, ...userWithoutPass } = user.dataValues;

  return res.status(200).json(userWithoutPass);
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
};
