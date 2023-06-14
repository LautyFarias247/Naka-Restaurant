const { Router } = require("express");
const { getUserAddresses, createAddress, updateAddress, deleteAddress } = require("../handlers/addressesHandler");


const addressesRouter = Router();
addressesRouter.get("/:_id", getUserAddresses)
addressesRouter.post("/:_id", createAddress)
addressesRouter.put("/:_id", updateAddress)
addressesRouter.delete("/:_id/:userId", deleteAddress)

module.exports = addressesRouter;