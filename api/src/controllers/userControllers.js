const { mongoose } = require('mongoose');
const bcrypt = require('bcrypt')
const User = require('../models/User');


const {compare, hash} = bcrypt


const saveUser = async (username, email, password) => {
    
		try {
			const hashedPass = await hash(password, 5)
	
			const newUser = new User({username, email, password: hashedPass})
		
			await newUser.save()
			return newUser
			
		} catch (error) {
			
			throw Error(error.message)
		}
}
const allUsers = async () => {
    const allBDD = await User.find({});
    return allBDD;
}

const searchUsers = async (name) => {
    const filterUser = await User.find()
    return filterUser.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
}

const updateById = async (id, user) => {
    const updateUser = await User.updateOne({ _id: id }, { $set: user })
    return updateUser;
}

module.exports = { saveUser, allUsers, searchUsers, updateById }