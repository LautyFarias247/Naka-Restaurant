const { Router } = require("express");
const {
  createPayment,
  successfulPayment,
  pendingPayment,
  failedPayment,
  webhook,
	prueba,
} = require("../handlers/paymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/create", createPayment);
paymentRouter.get("/success", successfulPayment);
paymentRouter.get("/pending", pendingPayment);
paymentRouter.get("/failure", failedPayment);
paymentRouter.post("/webhook", webhook);
paymentRouter.post("/prueba", prueba);

module.exports = paymentRouter;
