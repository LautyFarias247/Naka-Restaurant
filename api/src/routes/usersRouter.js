const { Router } = require("express");

const { getUsers, registerUser, updateUserCart, loginUser, getUserById, updateUserStatus, googleLogin } = require("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:_id", getUserById)
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser)
usersRouter.post("/googlelogin", googleLogin)
usersRouter.put("/cart/:_id", updateUserCart)
usersRouter.put("/status/:_id", updateUserStatus)


module.exports = usersRouter;