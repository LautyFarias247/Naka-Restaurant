const mongoose = require('mongoose');


const OrderScheme = new mongoose.Schema(
    {
        items: {
            type: Array,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            default: "pending"
        },
        date: {
            type: Date,
            default: Date.now
        }
    }, 
    {
        versionKey: false,
        timestamps: false
    }
)
module.exports = mongoose.model('order', OrderScheme);
