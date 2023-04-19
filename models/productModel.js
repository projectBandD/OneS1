const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: { type: String, require, },
    category: { type: String,  require },
    price:{ type: Number}
    }) 

module.exports = mongoose.model("Product", ProductSchema)
