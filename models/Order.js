const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    cod: { type: Integer, default: null},
    products: [{type: Schema.Types.ObjectID, ref: 'Product'}]
});

module.exports = mongoose.model('product', productSchema);