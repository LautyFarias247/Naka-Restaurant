const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema(
    {
        items: {
            type: Array,
            required: true
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
						ref: 'user',
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
				address: {
					type: Object,
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
module.exports = mongoose.model('order', OrderSchema);
