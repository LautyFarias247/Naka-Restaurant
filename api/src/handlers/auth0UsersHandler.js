const { createAuth0User } = require('../controllers/auth0UsersControllers')
const Auth0User = require('../models/Auth0User')
const Cart = require('../models/Cart')
const User = require('../models/User')

const getAuth0Users = async (req, res) => {
    try {
        const auth0users = await Auth0User.find()
        res.status(200).json(auth0users)
    } catch (error) {
        
    }
}

const getAuth0UserBySub = async (req, res) => {
    const {sub} = req.params
    console.log(sub);
    try {
        const auth0user = await Auth0User.find({sub: sub})
        res.status(200).json(auth0user)
    } catch (error) {
        console.log(error.message);
    }
}

const createAuth0Users = async (req, res) => {
    const { name, nickname, email, sub } = req.body;    
    
    try {
        const auth0user = await Auth0User.find({sub: sub})
        console.log(auth0user);
        if(auth0user.length > 0) return new Error('Ya usuario ya existente')
        const newUser = new Auth0User({name, nickname, email, sub});
        const newCart =  new Cart({items: [], owner: sub})
        const savedCart = await newCart.save()
        newUser.cart = savedCart._id
        await newUser.save()
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const banAuth0User = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        if(id.includes("auth")){           
            const bannedAuth0User = await Auth0User.updateOne({sub: id}, {$set: {isActive: false}})
            res.status(200).json(bannedAuth0User)           
        }
        else{
            const bannedUser = await User.updateOne({_id: id}, {$set: {is_active: false}})
            res.status(200).json(bannedUser)
        }
    } catch (error) {
       console.log(error); 
    }
}

const unbanAuth0User = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        if(id.includes("auth")){           
            const unbannedAuth0User = await Auth0User.updateOne({sub: id}, {$set: {isActive: true}})
            res.status(200).json(unbannedAuth0User)           
        }
        else{
            const unbannedUser = await User.updateOne({_id: id}, {$set: {is_active: true}})
            res.status(200).json(unbannedUser)
        }
    } catch (error) {
       console.log(error); 
    }
}

module.exports = {
    getAuth0Users,
    getAuth0UserBySub,
    createAuth0Users,
    banAuth0User,
    unbanAuth0User
}