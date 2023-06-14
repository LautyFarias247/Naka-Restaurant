const { Router } = require("express");
const { getCategories, createCategories, getCategoryById } = require("../handlers/categoriesHandler");


const categoriesRouter = Router();
categoriesRouter.get("/", getCategories)
categoriesRouter.post("/", createCategories)
// categoriesRouter.put("/:id", updateCategories)
categoriesRouter.get("/:id", getCategoryById)

module.exports = categoriesRouter;