const { Router } = require("express");

const { getUsers, registerUser, updateUserCart, loginUser, get } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usertsRouter.get("/:id", getUserById)
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser)
usersRouter.put("/cart/:_id", updateUserCart)


module.exports = usersRouter;