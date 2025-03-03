import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get single product
router.get("/:id", getProductById);

// Create a product
router.post("/",createProduct);

// Delete a product
router.delete("/:id", deleteProduct); 

// Update a product
router.put("/:id", updateProduct);

export default router;