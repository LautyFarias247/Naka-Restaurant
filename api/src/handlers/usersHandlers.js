const {
  saveUser,
  allUsers,
  searchUsers,
  updateById,
} = require("../controllers/userControllers");
const User = require("../models/User");
const { sendMail } = require("../libs/nodemailer");
const bcrypt = require("bcrypt");

const { compare } = bcrypt;

const getUsers = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name ? await searchUsers(name) : await allUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
	const {_id} = req.params 
	try {
		const user = await User.findById(_id)
		res.status(200).json(user)
	} catch (error) {
		res.status(400).json(error)
	}
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		const comparison = await compare(password, user.password);
		if (comparison) {
			return res.status(200).json(user);
		} else {
			return res.status(403).json("email o contraseña incorrectos")
		}
	} catch (error) {
		return res.status(400).json(error.message);
	}
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const savedUser = await saveUser(username, email, password);

    return res.status(200).json(savedUser);
  } catch (error) {
    if (error.message.includes("dup key")) {
      return res
        .status(400)
        .json("El nombre de usuario o email ya está registrado ");
    }
    console.log(error.message);
  }
};

const updateUserCart = async (req, res) => {
	const {_id} = req.params	
	const {cart} = req.body
	try {
		const updatedUser = await User.findByIdAndUpdate(_id, {cart}, {new: true})
		return res.status(200).json(updatedUser)
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = {
  getUsers,
	getUserById,
  loginUser,
  registerUser,
  updateUserCart,
};
