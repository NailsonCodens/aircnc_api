const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const AuthController = require('./controllers/AuthController');
const SpotController = require('./controllers/SpotController');
const DashController = require('./controllers/DashController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/register', AuthController.store);

routes.get('/dashboard', DashController.show);
routes.get('/spots', SpotController.index);
routes.post('/addspot', upload.single('thumbnail'), SpotController.store);

routes.post('/spots/:id/bookings', BookingController.store);

module.exports = routes;