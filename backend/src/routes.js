const express = require('express');
const upload = require('./config/upload');


const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotController')

const routes = express.Router();

//rota do usuario, qual rota executar
routes.post('/sessions', sessionController.store);
routes.post('/spots', upload.single('thumbnail') ,spotController.store);

module.exports = routes;
