// Imported libraries
const express = require('express');
const db = require('./config/mongoose');


// Creating an App with Express
const app = express();
const port = process.env.port || 3000;

//Enable us to pass data through URL
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    
    if(err){
        console.log("Error in running the server");
        return;
    }
    console.log(`Server up and running on port:  ${port}`);
});
