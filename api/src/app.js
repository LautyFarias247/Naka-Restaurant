require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const addressesRouter = require('./routes/addressesRouter')
const categoriesRouter = require('./routes/categoriesRouter');
const dishesRouter = require('./routes/dishesRouter')
const orderRouter = require('./routes/orderRouter')
const paymentRouter = require('./routes/paymentRouter')
const usersRouter = require('./routes/usersRouter');
const mercadopago = require("mercadopago");

const cors = require('cors')
mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN_MP,
});

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://naka-restaurant.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json())
app.use(morgan('dev'));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))


app.use('/addresses', addressesRouter)
app.use('/categories', categoriesRouter);
app.use('/dishes', dishesRouter);
app.use('/orders', orderRouter)
app.use('/payment', paymentRouter)
app.use('/users', usersRouter);


module.exports = app

