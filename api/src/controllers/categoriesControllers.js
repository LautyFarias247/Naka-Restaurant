const Category = require('../models/Category')

const allCategories = async () => {
    const allCategoriesBDD = await Category.find({})
    return allCategoriesBDD;
}
const searchCategory = async (name) => {
    const filterCategoryByName = await Category.find({});
    return filterCategoryByName.filter(category => category.name.toLowerCase().includes(name.toLowerCase()))
}

const updateByIdCategory = async (id, body) => {
    const updateCategory = await Category.updateOne({ _id: id }, { $set: body })
    return updateCategory;
}
const categorybyId = async (id) => {
    const filterById = await Category.find({ _id: id })
    return filterById;
}
module.exports = { categorybyId, allCategories, searchCategory, updateByIdCategory }