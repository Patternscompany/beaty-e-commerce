import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Get Order Products
const getOrder = async (req, res) => {
  try {
    const { userId } = req.params.userId; // Ensure userId is passed correctly in the body
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required." });
    }

    // Fetch the user by ID
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // Extract products from the user's cartData
    const products = user.cartData?.items;
    if (!products || products.length === 0) {
      return res.status(404).json({ success: false, message: "No products found in the cart." });
    }

    // Respond with success and the products list
    res.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching order details:", error.message);
    res.status(500).json({ success: false, message: "An error occurred while fetching the order." });
  }
};


// Placing order using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Create a new order
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    const savedOrder = await newOrder.save(); 

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      message: "Order placed successfully",
      orderId: savedOrder._id, 
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Placing order using Stripe Method
const placeOrderStripe = async (req, res) => {
  // Your code here
};

// Placing order using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
  // Your code here
};

export { placeOrder, placeOrderStripe, placeOrderRazorpay, getOrder };
