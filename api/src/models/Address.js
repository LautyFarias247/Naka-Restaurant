const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		street: {
			type: String,
			required: true
		},
		number: {
			type: String,
			required: true
		},
		apartment: {
			type: String,
		},
		zipCode: {
			type: String,
			required: true
		},
		neighborhood: {
			type: String,
			required: true
		},
		locality: {
			type: String,
			required: true
		},
		state: {
			type: String,
			required: true
		}
	}
)

module.exports = mongoose.model("address", AddressSchema)