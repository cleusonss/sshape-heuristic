const express = require('express');
const router = express.Router();

const OrderController = require("../controllers/OrderController");

/* Rotas */
router.post('/orders', OrderController.save);
router.get('/orders/:cod', OrderController.findOne);

module.exports = router;