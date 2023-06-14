const Address = require("../models/Address");
const User = require("../models/User");

const getUserAddresses = async (req, res) => {
  const { _id } = req.params;

  try {
    const addresses = await User.findById(_id).populate("addresses");

    res.status(200).json(addresses.addresses);
  } catch (error) {
    console.log(error);
  }
};

const createAddress = async (req, res) => {
  const { userId } = req.params;
  const { street, number, apartment, zipCode, neighborhood, locality, state } =
    req.body;
  try {
		const user = await User.findById(userId)
		console.log(user);
		if(user.addresses.length > 2) return res.status(403).json(user.addresses)
    const newAddress = new Address({
      owner: userId,
      street,
      number,
      apartment,
      zipCode,
      neighborhood,
      locality,
      state,
    });
    await newAddress.save();

    await User.updateOne({ _id: userId }, { $push: { addresses: newAddress._id } });

    return res.status(200).json(newAddress);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const updateAddress = async (req, res) => {
  const { _id } = req.params;
  const { street, number, apartment, zipCode, neighborhood, locality, state } =
    req.body;
  const newAddress = {};
  for (const prop in req.body) {
    if (req.body[prop] || prop === "apartment") {
      newAddress[prop] = req.body[prop];
    }
  }
  try {
    const updatedAddress = await Address.findByIdAndUpdate(_id, newAddress, {
      new: true,
    });
    return res.status(200).json(updatedAddress);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const deleteAddress = async (req, res) => {
  const { _id, userId } = req.params;
	console.log(_id);
	console.log(userId);
	try {
		const deletedAddress = await Address.findByIdAndRemove(_id)
		await User.findByIdAndUpdate(userId, { $pull: { addresses: _id } }, { new: true })

		return res.status(200).json(deletedAddress)
	} catch (error) {
		return res.status(400).json(error)	
	}
};

module.exports = {
  getUserAddresses,
  createAddress,
  updateAddress,
	deleteAddress
};
