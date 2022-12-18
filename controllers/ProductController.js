require("dotenv").config();
require("../services/connection").connect();

const { log } = console;
const Product = require("../models/Product");

exports.save = async (req, res, next) => {
  try {
    const { cod, name, aisle, location } = req.body;

    if (!(cod && name && aisle && location)) {
      res
        .status(401)
        .send({ status: "error", message: "Missing required fields" });
    }

    const savedProduct = await Product.findOne({ cod });
    if (savedProduct) {
      res
        .status(401)
        .send({ status: "error", message: "Product already exists" });
    }

    const newProduct = await Product.create({
      cod,
      name,
      aisle,
      location,
    });

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(501).send({ status: "error", message: error.message });
  }
};

exports.find = async (req, res, next) => {
  try {
    const products = await Product.find({});
    if (products) {
      res.status(200).json(products);
    }
    res.status(401).send({ status: "error", message: "Products nof found" });
  } catch (error) {
    res.status(501).send({ status: "error", message: error.message });
  }
};
