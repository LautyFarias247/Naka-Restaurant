const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const categoriesRouter = require('./routes/categories');
const foodsRouter = require('./routes/foodsRouter')
const usersRouter = require('./routes/usersRouter');
const paymentRouter = require('./routes/payment')
const auth0UsersRouter = require('./routes/auth0UsersRouter')
const notificarRouter = require('./routes/notificarRouter')
const orderRouter = require('./routes/orderRoutes')

const cors = require('cors')
//
require('dotenv').config();
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const cartRouter = require('./routes/cartRoutes');
// Agrega credenciales
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_KEY
});


const app = express();
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
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

app.use('/', notificarRouter)
app.use('/foods', foodsRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/payment', paymentRouter)
app.use('/auth0Users', auth0UsersRouter);
app.use('/cart', cartRouter)
app.use('/notificar', notificarRouter)
app.use('/order', orderRouter)


module.exports = app

