const mongoose = require('mongoose');


const CategoriesScheme = new mongoose.Schema(
    {
        name: {
            type: String,
						required: true,
            unique: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }, {
    versionKey: false,
    timestamps: false
}
)
module.exports = mongoose.model('category', CategoriesScheme);
