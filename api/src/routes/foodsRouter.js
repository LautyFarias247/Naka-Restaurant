const { Router } = require('express');
const { getFoods, createFood, getFoodById, updateFood, deleteFood } = require('../handlers/foodsHandlers');


const foodsRouter = Router();

foodsRouter.get("/", getFoods )
foodsRouter.get("/:id", getFoodById)

foodsRouter.post("/", createFood)
foodsRouter.put("/:id", updateFood)
foodsRouter.delete("/:id", deleteFood)

module.exports = foodsRouter