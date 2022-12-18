require("dotenv").config();

const { log } = console;
const Product = require("../models/Product");
const Picker = require("../services/picker");

exports.pick = async (req, res, next) => {
  try {
    const { cod } = req.params;

    if (!(cod )) {
      res
        .status(401)
        .send({ status: "error", message: "Missing required fields" });
    }

    const products = await Product.find({});
    let array = await Picker.pick(products);
    res.status(200).json(array);
  } catch (error) {
    res.status(501).send({ status: "error", message: error.message });
  }
};
