const express = require('express');
const routes = express.Router();
const sessionController = require('./controllers/SessionController');

//rota do usuario, qual rota executar
routes.post('/sessions', sessionController.store);

module.exports = routes;
