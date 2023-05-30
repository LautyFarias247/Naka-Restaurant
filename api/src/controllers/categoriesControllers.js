const Categories = require('../models/Categories')

const allCategories = async () => {
    const allCategoriesBDD = await Categories.find({})
    return allCategoriesBDD;
}
const searchCategory = async (name) => {
    const filterCategoryByName = await Categories.find({});
    return filterCategoryByName.filter(category => category.name.toLowerCase().includes(name.toLowerCase()))
}
const createCategory = async (body) => {
    const newCategory = new Categories(body)
    await newCategory.save()
    return newCategory;
}
const updateByIdCategory = async (id, body) => {
    const updateCategory = await Categories.updateOne({ _id: id }, { $set: body })
    return updateCategory;
}
const categorybyId = async (id) => {
    const filterById = await Categories.find({ _id: id })
    return filterById;
}
module.exports = { categorybyId, allCategories, searchCategory, createCategory, updateByIdCategory }