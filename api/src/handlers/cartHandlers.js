const Cart = require('../models/Cart');
const User = require('../models/User');
const Auth0User = require('../models/Auth0User')

const getCart = async (req, res) => {
    const { id } = req.params
    try {
        const results = await Cart.findById(id);

        res.status(200).send(results);
    } 
    catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

const updateCart = async (req, res) => {
    const { id } = req.params
    const  cart  = req.body
    console.log({updatecartid: id});
    try {
        if(id.includes("auth")){
            const auth0User = await Auth0User.findOne({sub: id})
            if(auth0User.cart){ 
                const updatedCart = await Cart.updateOne({ owner: id }, { $set: {items: cart} })
                return res.status(200).send(updatedCart)
            }
        }
        else{
            const user = await User.findById(id)
            if(user.cart){
                const updatedCart = await Cart.updateOne({owner: id}, {$set: {items: cart}})
                console.log({MEACTUALIZO: updatedCart});
                return res.status(200).json(updatedCart)
            }
        }
    } catch (error) {
        res.status(400).send(error)
        console.log(error.message);
    } 
    
    // const {items, userId, cartId } = req.body
    // try {
    //     const updatedCart = await Cart.updateOne({ owner: userId }, { $set: {items} })
    //     console.log(items);
    //     console.log(userId);
    //     res.status(200).send(updatedCart)
    // } catch (error) {
    //     console.log(error.message);
    // }

}

const createCart = async (req, res) => {
    const { cart, userId, userSub } = req.body;
    console.log(req.body);
    const id = userId ? userId : userSub
    try {
        const user = await User.findById(userId)
        const newCart =  new Cart({items: cart, owner: user._id})
        const savedCart = await newCart.save()
        user.cart = savedCart
        await user.save()

        res.status(200).json(newCart)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getCart,
    createCart,
    updateCart
}