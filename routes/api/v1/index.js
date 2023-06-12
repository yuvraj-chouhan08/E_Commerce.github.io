// Importing Express
const express = require('express');

// Creating a router to redirect requests
const router = express.Router();

//Redirecting to products route
router.use('/products',require('./product_api'));

//Exporting the router
module.exports = router;