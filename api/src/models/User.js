const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        username: {
            type: String
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
				picture: {
					type: String,
					default: null
				},
        admin: {
					type: Boolean,
					default: false,
        },
        isActive: {
					type: Boolean,
					default: true
        },
				addresses: {
					type: Array,
					default: []
				},
        cart: {
            type: Array,
            default: []
        },
        orders: [{ type: ObjectId, ref: 'order' }]

    }, {
    versionKey: false,
    timestamps: true
}
)

//model
module.exports = mongoose.model('user', UserScheme);