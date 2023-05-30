const { Router } = require("express");
const { createAuth0Users, getAuth0Users, getAuth0UserBySub, banAuth0User, unbanAuth0User } = require("../handlers/auth0UsersHandler");


const auth0UsersRouter = Router();

auth0UsersRouter.get("/", getAuth0Users);
auth0UsersRouter.get("/:sub", getAuth0UserBySub);
auth0UsersRouter.post("/", createAuth0Users);
auth0UsersRouter.put("/ban/:id", banAuth0User)
auth0UsersRouter.put("/unban/:id", unbanAuth0User)

module.exports = auth0UsersRouter;