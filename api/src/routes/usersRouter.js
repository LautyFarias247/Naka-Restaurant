const { Router } = require("express");

const { getUsers, registerUser, updateUserCart, loginUser } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser)
usersRouter.put("/cart/:_id", updateUserCart)


module.exports = usersRouter;