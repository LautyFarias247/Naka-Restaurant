const { Router } = require("express");

const { getUsers, registerUser, updateUserById, loginUser } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser)
usersRouter.put("/:id", updateUserById)

module.exports = usersRouter;