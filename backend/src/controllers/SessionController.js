// Index, show, store, update, destroy
const User = require('../models/User');
module.exports = {
  async store(req, res) {
    const { email } = req.body; //Desestruturação que pega informações de dentro de uma variavel

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email }); // salvar no banco, deve ser await
    }

    return res.json(user);
  }
};