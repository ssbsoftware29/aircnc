const express = require('express');
const upload = require('./config/upload');


const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotController')
const dashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();

//rota do usuario, qual rota executar
routes.post('/sessions', sessionController.store);
routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail') ,spotController.store);

routes.get('/dashboard', dashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
