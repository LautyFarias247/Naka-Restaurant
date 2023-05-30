const { mongoose } = require('mongoose');
const { compare } = require('../helpers/handleEncrypt');
const User = require('../models/User');


const createUser = async (name, phone, email, passHash) => {
    console.log(name, phone, email, passHash)
    const newUser = new User({
        name: name,
        phone: phone,
        email: email,
        password: passHash
    })
    
    return await newUser.save();
}
const allUsers = async () => {
    const allBDD = await User.find({});
    return allBDD;
}

const searchUsers = async (name) => {
    const filterUser = await User.find()
    return filterUser.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
}
const userById = async (id) => {
    const filterById = await User.find({ _id: id })
    return filterById;
}
const updateById = async (id, user) => {
    const updateUser = await User.updateOne({ _id: id }, { $set: user })
    return updateUser;
}

module.exports = { createUser, allUsers, searchUsers, userById, updateById }