
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//      name: {type:String, required:true},
//      description: {type:String, required:true},
//      price: {type: Array, required:true},
//      image: {type:Number, required:true},
//      category:{type:String, reqired:true},
//      sizes:{type:Array, required:true},

// })

// const productModel = mongoose.model.product || ("product",productSchema)

// export default productModel

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }, // Change to Number if price is a single value
    image: { type: Array, required: true }, // Updated to Array to store multiple URLs
    category: { type: String, required: true },
    sizes: { type: Array, required: true },
    date: { type: Date, default: Date.now }, // Add default for date
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;







// MongoDB connection function
const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("DB connected");
        });
        await mongoose.connect(`${MONGODB_URI}/e-commerce`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export { connectDB };

// Cloudinary configuration
const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
};

export { connectCloudinary };
