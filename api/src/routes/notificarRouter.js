const { Router } = require("express");
const { notificar } = require("../handlers/notificarMpHandler");


const notificarRouter = Router();

notificarRouter.post("/", notificar)

module.exports = notificarRouter;