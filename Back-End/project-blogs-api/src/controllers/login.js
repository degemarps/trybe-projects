const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

const validateBody = (body, res) => {
  const { email, password } = body;
  if (!email || !password) {
    res
      .status(400)
      .json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateBody(req.body, res)) return;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const userData = user.dataValues;

    if (userData.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: passBD, ...userWithoutPass } = userData;

    const token = generateToken(userWithoutPass);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  loginUser,
};
