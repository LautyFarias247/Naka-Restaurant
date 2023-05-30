const { Router } = require("express");
const { payment } = require("../handlers/paymentHandlers");


const paymentRouter = Router();

paymentRouter.post("/", payment)


module.exports = paymentRouter;