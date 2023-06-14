const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const categoriesRouter = require('./routes/categoriesRouter');
const dishesRouter = require('./routes/dishesRouter')
const usersRouter = require('./routes/usersRouter');
const paymentRouter = require('./routes/paymentRouter')
const orderRouter = require('./routes/orderRouter')

const cors = require('cors')
//
require('dotenv').config();
// SDK de Mercado Pago

// Agrega credenciales
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


app.use('/dishes', dishesRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/payment', paymentRouter)
app.use('/orders', orderRouter)


module.exports = app

