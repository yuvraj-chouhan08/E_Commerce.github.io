// Importing Express
const express = require('express');

// Creating a router to redirect requests
const router = express.Router();

//Redirecting to version 1 of the API
router.use('/v1',require('./v1'));


// Exporting the router
module.exports = router;