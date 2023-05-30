const Food = require('../models/Food')

const getFoodByName = async (name) => {
    const allFoods = await Food.find();
    return allFoods.filter(food => food.name.toLowerCase().includes(name.toLowerCase()))
}

module.exports = {
    getFoodByName
}