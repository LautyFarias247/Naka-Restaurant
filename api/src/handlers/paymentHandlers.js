const mercadopago = require("mercadopago");
const Order = require("../models/Order");
const User = require("../models/User");

const createPayment = async (req, res) => {
	const { cart, userId } = req.body;
	
  let reference = {
		items: [],
		amount: 0
	};

  cart.forEach(({_id, name, price, quantity, description, image }) => {
    reference.items.push({
			id: _id,
      title: name,
			description: description,
      unit_price: price,
      currency_id: "ARS",
      quantity,
			picture_url: image
    });
		reference.amount += (price * quantity)
  });

  mercadopago.configure({
    access_token:
      "TEST-4897041401780680-061218-286e74729b6a60cdeb988f78b7dbe856-1397776654",
  });
  try {
    const result = await mercadopago.preferences.create({
      items: reference.items,
			metadata: {
				userId,
				amount: reference.amount
			},
      back_urls: {
        success: "http://localhost:3000",
        pending: "http://localhost:3000",
        failure: "http://localhost:3000",
      },
      notification_url:
        "https://9c89-2800-810-557-2bcd-45b5-586f-405c-1a9a.sa.ngrok.io/payment/webhook",
    });

    return res.status(200).json(result);
  } catch (error) {
		console.log(error);
    return res.status(400).json(error);
  }
};
const successfulPayment = async (req, res) => {
  try {
    return res.status(200).json("todobien");
  } catch (error) {
    return res.status(400).json("todomal");
  }
};
const pendingPayment = async (req, res) => {
  try {
    return res.status(200).json("todobien");
  } catch (error) {
    return res.status(400).json("todomal");
  }
};
const failedPayment = async (req, res) => {
  try {
    return res.status(200).json("todobien");
  } catch (error) {
    return res.status(400).json("todomal");
  }
};

const webhook = async (req, res) => {
  const payment = req.query;
  try {
    if (payment.type === "payment") {
      const { body } = await mercadopago.payment.findById(payment["data.id"]);
			const {status, additional_info, metadata} = body
			
			if(status === "approved"){
			
				const newOrder = new Order({ status: "pending", items: additional_info.items, owner: metadata.user_id, amount: metadata.amount });
				
				await newOrder.save();
				
				await User.updateOne({ _id: metadata.user_id }, { $push: { orders: newOrder._id } })
				await User.updateOne({ _id: metadata.user_id }, { $set: { cart: [] } })
				
				return res.status(200).json(body);
			}
		}
  } catch (error) {
		console.log(error.message);
    return res.status(400).json(error);
  }
};

module.exports = {
  createPayment,
  successfulPayment,
  pendingPayment,
  failedPayment,
  webhook,
};
