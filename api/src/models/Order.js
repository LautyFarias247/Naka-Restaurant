const mongoose = require('mongoose');


const OrderScheme = new mongoose.Schema(
    {
        items: {
            type: Array,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
						ref: 'user',
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            default: "pending"
        }
    }, 
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('order', OrderScheme);
