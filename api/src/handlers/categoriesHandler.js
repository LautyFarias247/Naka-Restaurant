const Categories = require('../models/Categories')

const {
  allCategories,
  searchCategory,
  updateByIdCategory,
  categorybyId,
} = require("../controllers/categoriesControllers");

const getCategories = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name ? await searchCategory(name) : await allCategories();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const createCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = new Categories({name});
    await newCategory.save();
		
    return res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const updateCategories = async (req, res) => {
  const { description, name } = req.body;
  const { id } = req.params;
  const sendCategory = { description, name };
  try {
    const result = await updateByIdCategory(id, sendCategory);
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json(error.message);
  }
};
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await categorybyId(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  getCategories,
  createCategories,
  updateCategories,
  getCategoryById,
};
