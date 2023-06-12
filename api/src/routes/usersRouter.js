const { Router } = require("express");

const { getUsers, registerUser, updateUserCart, loginUser, getUserById } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:_id", getUserById)
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser)
usersRouter.put("/cart/:_id", updateUserCart)


module.exports = usersRouter;