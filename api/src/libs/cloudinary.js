require('dotenv').config();
const cloudinary = require('cloudinary').v2
const { CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET} = process.env

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

const uploadImage = async (imagePath) => {
    return await cloudinary.uploader.upload(imagePath, {
        folder: 'NAKA'
    })
}

const deleteImage = async (public_id) => {
    return await cloudinary.uploader.destroy(public_id)
}

module.exports = {
    uploadImage,
    deleteImage
}