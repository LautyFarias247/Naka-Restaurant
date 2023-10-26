const mercadopago = require("mercadopago");
const Order = require("../models/Order");
const User = require("../models/User");
const { default: axios } = require("axios");

const createPayment = async (req, res) => {
  try {
    const { cart, userId, address, username } = req.body;

    let reference = {
      items: [],
      amount: 0,
    };

    cart.forEach(({ _id, name, price, quantity, description, image }) => {
      reference.items.push({
        id: _id,
        title: name,
        description: description,
        unit_price: price,
        currency_id: "ARS",
        quantity,
        picture_url: image,
      });
      reference.amount += price * quantity;
    });

    const result = await mercadopago.preferences.create({
      items: reference.items,
			metadata: {
        userId,
        amount: reference.amount,
        address,
        username,
      },
      back_urls: {
        success: "https://naka-restaurant.vercel.app",
        pending: "https://naka-restaurant.vercel.app",
        failure: "https://naka-restaurant.vercel.app",
      },
      notification_url:
        "https://843c-2800-810-557-2bcd-d408-33a1-710f-ca4c.ngrok.io/payment/webhook",
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
    console.log("------------------WEBHOOK------------------");
    console.log(payment);
    if (payment.type === "payment") {
      const { body } = await mercadopago.payment.findById(payment["data.id"]);
      const { status, additional_info, metadata } = body;

      if (status === "approved") {
        console.log(metadata);
        const newOrder = new Order({
          status: "En preparación",
          items: additional_info.items,
          ownerId: metadata.user_id,
          owner: metadata.username,
          amount: metadata.amount,
          address: metadata.address,
        });

        await newOrder.save();

        await User.updateOne(
          { _id: metadata.user_id },
          { $push: { orders: newOrder._id } }
        );
        await User.updateOne({ _id: metadata.user_id }, { $set: { cart: [] } });

        return res.status(200).json(body);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const prueba = async (req, res) => {


    const ACCESS_TOKEN = "TEST-6031474560360689-082914-c2d057ffacce48f0c3cedff3302d66c1-736094047";
    const clientID = "6031474560360689";
		const requestData = {
			return_url: "https://localhost:3001/",
			external_flow_id: "EXTERNAL_FLOW_ID",
			external_user: {
				id: "usertest",
				description: "Test account"
			},
			agreement_data: {
				validation_amount: 3.14,
				description: "Test agreement"
			}
		};
		try {
			const mpResponse = await axios.post(
				`https://api.mercadopago.com/v2/wallet_connect/agreements?client.id=${clientID}`,
				requestData,
				{
					headers: {
						Authorization: `Bearer ${ACCESS_TOKEN}`,
						"Content-Type": "application/json",
						"x-platform-id": ACCESS_TOKEN
					}
				}
			);
			console.log(Object.keys(mpResponse));
			return res.status(200).json(mpResponse);
			
		} catch (error) {
			console.log(Object.keys(error));
			console.log(error.request);

			return res.status(400).json(error);
		}
	

};

module.exports = {
  createPayment,
  successfulPayment,
  pendingPayment,
  failedPayment,
  webhook,
  prueba,
};
