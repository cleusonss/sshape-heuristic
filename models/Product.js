const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    cod: { type: Number, default: null},
    name: { type: String, default: null},
    fabricante: { type: String, default: null},
    aisle: { type: Number, default: null},
    location: { type: Number, default: null}
});

module.exports = mongoose.model('product', productSchema);