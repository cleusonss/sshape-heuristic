const express = require('express');
const router = express.Router();

const PickController = require("../controllers/PickController");

/* Rotas */
router.get('/picks/:cod', PickController.pick);

module.exports = router;