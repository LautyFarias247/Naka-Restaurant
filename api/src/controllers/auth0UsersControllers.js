const Auth0User = require('../models/Auth0User');

const createAuth0User = async (name, nickname, email, sub) => {
    try {
        const newAuth0User = new Auth0User({ name, nickname, email, sub })
        await newAuth0User.save();
        return newAuth0User
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    createAuth0User
}