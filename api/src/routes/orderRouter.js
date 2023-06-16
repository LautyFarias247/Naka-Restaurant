const {Router} = require('express')

const {getAllOrders, getOrdersByUser, updateOrderStatus} = require('../handlers/orderHandler')

const orderRouter = Router()

orderRouter.get('/', getAllOrders)
orderRouter.get('/:_id', getOrdersByUser)
orderRouter.put('/:_id', updateOrderStatus)

module.exports = orderRouter