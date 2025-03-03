import Product from '../models/Product.js';
import mongoose from 'mongoose';
// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Get single product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Create a product
export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newProduct = await Product.create(product);
        return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body; // Corrected from res.body to req.body
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('No product with that id');
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No product with that id');
    }
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ success: true, message: "Product is deleted" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}