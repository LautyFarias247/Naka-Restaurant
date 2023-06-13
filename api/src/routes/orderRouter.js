const {Router} = require('express')

const {getAllOrders, getOrdersByUser, orderDelivered} = require('../handlers/orderHandler')

const orderRouter = Router()

orderRouter.get('/', getAllOrders)
orderRouter.get('/:id', getOrdersByUser)
orderRouter.put('/:id', orderDelivered)

module.exports = orderRouter