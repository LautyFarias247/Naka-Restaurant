const Dish = require("../models/Dish");
const { getFoodByName } = require("../controllers/foodsControllers");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const fs = require("fs-extra");

const getDishes = async (req, res) => {
  try {
    const { name } = req.query;
    const results = await Dish.find();
    res.status(200).send(results);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getDishById = async (req, res) => {
  const { id } = req.params;
  try {
    const dishById = await Dish.findById(id);
    res.status(200).send(dishById);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createDish = async (req, res) => {
  try {
		let image
		if(req.files?.image){
			const result = await uploadImage(req.files.image.tempFilePath)
			image = {
				url: result.secure_url,
				public_id: result.public_id
			}
			// await fs.remove(req.files.image.tempFilePath)
		}
		const newDish =  new Dish({...req.body, image})
		await newDish.save()
    return res.status(200).json(newDish);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};

const updateDish = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, description, stock, price } = req.body;
		console.log(_id);
		console.log(req.body);
		const updatedDish = await Dish.findByIdAndUpdate(_id, req.body)
    // const updatedDish = await Dish.updateOne(
    //   { _id: id },
    //   { $set: { price, stock } }
    // );
    res.status(200).send(updatedDish);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const deleteDish = async (req, res) => {
  const { _id } = req.params;
  try {
    const dishRemoved = await Dish.findByIdAndDelete(_id);

    // await deleteImage(dishRemoved.image.public_id);
    res.status(200).send("se borro correctamente");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
};
