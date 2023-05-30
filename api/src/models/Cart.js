const mongoose = require('mongoose');


const CartScheme = new mongoose.Schema(
    {
        items: {
            type: Array,
            required: true
        },
        owner: {
            type: String,
            required: true,
            unique:true
        }
    }, {
    versionKey: false,
    timestamps: false
}
)
module.exports = mongoose.model('cart', CartScheme);
