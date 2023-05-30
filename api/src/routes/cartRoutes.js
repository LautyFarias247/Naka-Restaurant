const { Router } = require("express");
const {createCart, getCart, updateCart} = require("../handlers/cartHandlers");


const cartRouter = Router();
cartRouter.get("/:id", getCart )
cartRouter.post("/", createCart)
cartRouter.put("/:id", updateCart )
// cartRouter.get("/:id", )

module.exports = cartRouter;