import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Use import instead of require
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001; // Ensure the port number is assigned

app.use(express.json()); // To parse JSON bodies

// Configure CORS to allow requests from http://localhost:5173
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use("/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});







