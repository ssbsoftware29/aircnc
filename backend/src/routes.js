const express = require('express');
const routes = express.Router();

//rota do usuario, qual rota executar
routes.post('/users', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
