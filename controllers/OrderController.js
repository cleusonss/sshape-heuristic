require("dotenv").config();
require("../services/connection").connect();

const { log } = console;
const Order = require("../models/Order");
const Picker = require("../services/sshape");

exports.save = async (req, res, next) => {
  try {

    const { cod, products } = req.body;
    


      if (!(cod && products)) {
        res
          .status(401)
          .send({ status: "error", message: "Missing required fields" });
      }

      const savedOrder = await Order.findOne({ cod });
      if (savedOrder) {
        res
          .status(401)
          .send({ status: "error", message: "Order already exists" });
      }

      const newOrder = await Order.create({
        cod,
        products,
      });

    res.status(200).json(newOrder);
  } catch (error) {
    res.status(501).send({ status: "error", message: error.message });
  }
};

exports.findOne = async (req, res, next) => {
    try {
        const { cod } = req.params;
        if (!( cod )) {
            res
              .status(401)
              .send({ status: "error", message: "Missing required fields" });
          }
      
          const order = await Order.findOne({ cod });
          const products = await Picker.pick(order.products);
          order.products = products;
          res.status(200).json(order);
    } catch (error) {
      res.status(501).send({ status: "error", message: error.message });
    }
  };
