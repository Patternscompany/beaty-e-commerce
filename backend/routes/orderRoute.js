
import expres from 'express'
import authUser from '../middleware/auth.js'

import { placeOrder, placeOrderStripe,placeOrderRazorpay, getOrder} from '../controllers/orderController.js'

const orderRouter = expres.Router()

// payment Features

orderRouter.get('/getOrder', authUser,getOrder)
orderRouter.post('/place', authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)



export default orderRouter