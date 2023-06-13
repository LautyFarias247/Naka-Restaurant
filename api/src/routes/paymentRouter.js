const { Router } = require("express");
const {
  createPayment,
  successfulPayment,
  pendingPayment,
  failedPayment,
  webhook,
} = require("../handlers/paymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/create", createPayment);
paymentRouter.get("/success", successfulPayment);
paymentRouter.get("/pending", pendingPayment);
paymentRouter.get("/failure", failedPayment);
paymentRouter.post("/webhook", webhook);

module.exports = paymentRouter;
