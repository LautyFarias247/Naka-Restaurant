const mongoose = require('mongoose');

const AddressScheme = new mongoose.Schema(
	{
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
			required
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

module.exports = mongoose.model("address", AddressScheme)