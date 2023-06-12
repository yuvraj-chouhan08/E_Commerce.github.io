// Importing Mongoose
const mongoose = require('mongoose');


// Creating a Schema for the product
const productSchema = new mongoose.Schema({
        name : {
            type : String,
            required: true
        },
        quantity: {
            type : Number,
            required: true
        }
});


// Creating a model with the created schema
const Product = mongoose.model("Product",productSchema);

// Exporting the model
module.exports = Product;