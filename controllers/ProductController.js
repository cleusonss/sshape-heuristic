require("dotenv").config();
require("../services/connection").connect();

const { log } = console;
const Product = require("../models/Product");

exports.save = async (req, res, next) => {
  try {
    const { cod, name, fabricante, aisle, location } = req.body;

    if (!(cod && name && fabricante && aisle && location)) {
      res
        .status(401)
        .send({ status: "error", message: "Missing required fields" });
    }

    const savedProduct = await Product.findOne({ cod });
    if (savedProduct) {
      res
        .status(402)
        .send({ status: "error", message: "Product already exists" });
    }

    const newProduct = await Product.create({
      cod,
      name,
      fabricante,
      aisle,
      location,
    });

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(501).send({ status: "error", message: error.message });
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { cod } = req.params;
    const product = await Product.findOne({cod});
    if (product) {
      res.status(200).json(product);
    }
    res.status(402).send({ status: "error", message: "Product nof found" });
  } catch (error) {
    res.status(501).send({ status: "error", message: error.message });
  }
};
