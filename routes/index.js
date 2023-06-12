// Importing Express
const express = require('express');

// Creating a router to redirect requests
const router = express.Router();
const homeController = require('../controllers/homeController');

//Redirecting to API
router.use('/api',require('./api'));
router.get('/',homeController.home);

// Exporting the router
module.exports = router;
