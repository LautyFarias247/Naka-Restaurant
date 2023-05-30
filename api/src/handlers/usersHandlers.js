const { createUser, allUsers, searchUsers, userById, updateById } = require('../controllers/userControllers');
const { encrypt, compare } = require('../helpers/handleEncrypt');
const User = require('../models/User');
const Cart = require('../models/Cart')
const {sendMail} = require('../libs/nodemailer')

const getUsers = async (req, res) => {
    const { name } = req.query;
    try {
        const result = name ? await searchUsers(name) : await allUsers();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const compareLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            const checkPassword = await compare(password, user.password)
            if (checkPassword) {
                res.status(200).json({
                    message: 'valid email correct password',
                    user
                })
            } else {
                res.status(409).json({
                    error: 'Invalid password',
                    status: 409,
                    statusText: 'Invalid password'
                })
            }
        } else {
            res.status(410).json({
                error: "Invalid email",
                status: 410,
                statusText: 'Invalid email'
            })
        }

    } catch (error) {
        res.status(400).json({
            error: 'error 404',
            status: "",
            statusText: ''
        })
    }
}

const createUsers = async (req, res) => {
    const { name, phone, email, password } = req.body;
 
    try {
        const passHash = await encrypt(password)
        const newUser = await createUser(name, phone, email, passHash);

        const newCart =  new Cart({items: [], owner: newUser._id})
        const savedCart = await newCart.save()

        newUser.cart = savedCart._id
        await newUser.save()

        if(newUser.name){
           await sendMail(email,name)
           console.log("SE MANDO EL MAIL");
        }
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, phone, email, password, role, state } = req.body;
    const updateUser = { name, phone, email, password, role, state };
    try {
        const result = await updateById(id, updateUser);

        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getUsers,
    createUsers,
    getUserById,
    updateUserById,
    compareLogin
}
