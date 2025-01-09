

import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js";


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes } = req.body;

        // Check for uploaded images
        const imageFiles = req.files?.image1 || [];
        const images = Array.isArray(imageFiles) ? imageFiles : [imageFiles];

        // Upload images to Cloudinary
        const imageUrl = await Promise.all(
            images.map(async (file) => {
                const result = await cloudinary.uploader.upload(file.path, {
                    resource_type: "image",
                });
                return result.secure_url;
            })
        );

        // Prepare product data
        const ProductData = {
            name,
            description,
            price: Number(price),
            category,
            sizes: JSON.parse(sizes),
            image: imageUrl,
        };

        // Save product to database
        const product = new productModel(ProductData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};





// function list Product

const listProduct = async (req,res) => {

    try {
        const products = await productModel.find({});
        res.json({success:true,products})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
        
    }

}

// function for removeproduct 

const removeProduct = async (req,res) => {

    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
        
    } catch (error) {
        console.log(error)
        res.json({message:false,message:error.message})
        
    }
}

// function for single product info

const singleProduct = async (req,res) => {

}

export {addProduct,singleProduct,listProduct,removeProduct}

