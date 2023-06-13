const mercadopago = require("mercadopago");
const Order = require("../models/Order");

const createPayment = async (req, res) => {
	const {cart} = req.body
	let items = []

	cart.forEach(({name, price, quantity})=>{
		items.push({
			title: name,
			unit_price: price,
			currency_id: "ARS",
			quantity
		})
	})


	mercadopago.configure({
		access_token: "TEST-4897041401780680-061218-286e74729b6a60cdeb988f78b7dbe856-1397776654",
  });
	try {
	
	const result = await mercadopago.preferences.create({
		items,
		back_urls: {
			success: "http://localhost:3001/payment/success",
			pending: "http://localhost:3001/payment/pending",
			failure: "http://localhost:3001/payment/failure"
		},
		notification_url: "https://c647-2800-810-557-2bcd-ec67-bb56-1e07-78ee.sa.ngrok.io/payment/webhook"
	})

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json("todomal");
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
	const payment = req.query
	try {
		if(payment.type === "payment"){
			console.log(req.query);
			const newOrder = new Order({status: "asdadasd"})
			await newOrder.save()
			const data = await mercadopago.payment.findById(payment["data.id"])
			// console.log(data);
			console.log(data.body.additional_info.items);
			// console.log(data.mercadopagoResponse);
			return res.status(200).json(data);
		}
  } catch (error) {
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
