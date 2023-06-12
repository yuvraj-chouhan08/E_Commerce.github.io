// Creating a database to store products
const mongoose = require('mongoose');

// Connecting the database
mongoose.connect("mongodb+srv://Riteshk229:9693640242@cluster0.lucaj3w.mongodb.net/EcomAPI?retryWrites=true&w=majority");

const db = mongoose.connection;

// on unsuccessfull connection
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//on succesfull connection
db.once('open',function(){
    console.log("*** Connected to Database :: MongoDB ***");
});

module.exports = db;
