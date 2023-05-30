require('dotenv').config();
const cloudinary = require('cloudinary').v2
const { CLOUD_NAME, API_KEY, API_SECRET} = process.env

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
})

const uploadImage = async (imagePath) => {
    return await cloudinary.uploader.upload(imagePath, {
        folder: 'El_Bodegon_de_Tony'
    })
}

const deleteImage = async (public_id) => {
    return await cloudinary.uploader.destroy(public_id)
}

module.exports = {
    uploadImage,
    deleteImage
}