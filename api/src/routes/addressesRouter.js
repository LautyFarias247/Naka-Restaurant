const { Router } = require("express");
const { getUserAddresses, createAddress, updateAddress } = require("../handlers/addressesHandler");


const addressesRouter = Router();
addressesRouter.get("/:_id", getUserAddresses)
addressesRouter.post("/:_id", createAddress)
addressesRouter.put("/:_id", updateAddress)

module.exports = addressesRouter;