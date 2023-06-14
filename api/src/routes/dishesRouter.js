const { Router } = require('express');
const { getDishes, createDish, getDishById, updateDish, deleteDish } = require('../handlers/dishesHandlers');


const dishesRouter = Router();

dishesRouter.get("/", getDishes )
dishesRouter.get("/:id", getDishById)
dishesRouter.post("/", createDish)
dishesRouter.put("/:id", updateDish)
dishesRouter.delete("/:id", deleteDish)

module.exports = dishesRouter