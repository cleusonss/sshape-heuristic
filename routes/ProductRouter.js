const express = require('express');
const router = express.Router();

const ProductController = require("../controllers/ProductController");

/* Rotas */
router.post('/products', ProductController.save);
router.get('/products', ProductController.find);

module.exports = router;