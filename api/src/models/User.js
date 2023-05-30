const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Boolean,
            default: false,
        },
        is_active: {
            type: Boolean,
            default: true
        },
        cart: {
            type: ObjectId,
            ref: 'cart'
        },
        orders: [{ type: ObjectId, ref: 'order' }]

    }, {
    versionKey: false,
    timestamps: true
}
)

//model
module.exports = mongoose.model('user', UserScheme);