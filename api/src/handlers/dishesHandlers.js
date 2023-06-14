const Dish = require('../models/Dish')
const {getFoodByName} = require('../controllers/foodsControllers')
const { uploadImage, deleteImage } = require('../libs/cloudinary');
const fs = require('fs-extra')


const getDishes = async (req, res) => {
    try {
        const {name} = req.query;
        const results = await Dish.find();
        res.status(200).send(results);
    } 
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getDishById = async (req, res) => {
    const {id} = req.params;
    try {
        const dishById = await Dish.findById(id);
        res.status(200).send(dishById);
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

const createDish = async (req, res) => {
    try {
        const {name, price, description, category} = req.body;
        let image;
        if(req.files){
            if(req.files.image){
                const res = await uploadImage(req.files.image.tempFilePath);
                image = {
                    url: res.secure_url,
                    public_id: res.public_id
                };
                await fs.remove(req.files.image.tempFilePath)
            }
        }


        const newDish = new Dish({name, price, description, category, image });
        await newDish.save();
        res.status(201).send(newDish);
    } 
    catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
}

const updateDish = async (req, res) => {
    try {
        const {id} = req.params;
        const {stock, price} = req.body;
      
        const updatedDish = await Dish.updateOne({_id: id}, { $set: {price, stock} });
        res.status(200).send(updatedDish);
    } 
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

const deleteDish = async (req, res) => {
    const { id } = req.params
    try {
        const dishRemoved = await Dish.findByIdAndDelete(id);
        await deleteImage(dishRemoved.image.public_id)
        res.status(200).send("se borro correctamente")
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getDishes,
    getDishById,
    createDish,
    updateDish,
    deleteDish,
		
}