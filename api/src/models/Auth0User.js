const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const Auth0UserScheme = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        sub: {
            type: String,
            unique:true,
            required: true
        },
        role: {
            type: Boolean,
            default: false,
        },
        isActive: {
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

module.exports = mongoose.model('Auth0User', Auth0UserScheme);