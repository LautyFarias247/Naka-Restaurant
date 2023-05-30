const mongoose = require('mongoose');
require('dotenv').config();
const { DB_USER, DB_PASSWORD } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.kbzkiqj.mongodb.net/?retryWrites=true&w=majority`);
        console.log("tamo on");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB