const mongoose = require('mongoose');
const Product = require('./Product');

const orderSchema = new mongoose.Schema({
    cod: { type: Number, default: null},
    products: [{type: Array, ref: 'Product'}]
});

module.exports = mongoose.model('order', orderSchema);