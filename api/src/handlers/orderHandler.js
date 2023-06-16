const Order = require("../models/Order");
const User = require("../models/User");

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    console.log(error);
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const orders = await User.findById(_id).populate("orders").exec();
	
    res.status(200).json(orders.orders);
  } catch (error) {
    console.log(error);
  }
};


const updateOrderStatus = async (req, res) => {
  const { _id } = req.params;
	const {status} = req.body
	console.log(_id);
	console.log(status);
  try {
    const orderDelivered = await Order.findByIdAndUpdate(_id, {status}, {new: true});
    res.status(200).json(orderDelivered);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
};
