const { Router } = require("express");

const { getUsers, registerUser, getUserById, updateUserById, compareLogin } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", registerUser);
usersRouter.put("/:id", updateUserById)
usersRouter.post("/login", compareLogin)

module.exports = usersRouter;