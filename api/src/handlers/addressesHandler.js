const Address = require("../models/Address");
const User = require("../models/User");


const getUserAddresses = async (req, res) => {
  const {_id} = req.params
	
	try {
    const addresses = await User.findById(_id)
      .populate("addresses") // Nombre del campo que contiene las referencias a las órdenes
      .exec();

    res.status(200).json(addresses.addresses);
  } catch (error) {
    console.log(error);
  }
};

const createAddress = async (req, res) => {
	const {_id} = req.params
	console.log(_id);
	const {street, number, apartment, zipCode, neighborhood, locality, state} = req.body
	try {
		const newAddress = new Address({owner:_id, street, number, apartment, zipCode, neighborhood, locality, state});
		await newAddress.save();
		
		await User.updateOne({ _id }, { $push: { addresses: newAddress._id } })
		
		return res.status(200).json(newAddress);
	} catch (error) {
		console.log(error);
		return res.status(200).json(error)
	}
}

const updateAddress = async () => {

} 

module.exports = {
	getUserAddresses,
	createAddress,
	updateAddress
}