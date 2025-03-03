# 🛍️ Online Store

A full-stack online store application built with **React, Vite, Chakra UI, Express, and MongoDB**. This application allows users to view, create, update, and delete products, with a smooth and responsive UI.

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies](#-technologies)
- [🚀 Installation](#-installation)
- [📖 Usage](#-usage)
- [📡 API Endpoints](#-api-endpoints)
- [📜 License](#-license)

## ✨ Features

- 🏪 View a list of products  
- ➕ Create a new product  
- ✏️ Update an existing product  
- ❌ Delete a product  
- 🌗 Toggle between **light** and **dark** modes  

## 🛠️ Technologies

### **Frontend**
- ⚛️ React  
- ⚡ Vite  
- 🎨 Chakra UI  
- 🔀 React Router  
- 🗃️ Zustand (state management)  

### **Backend**
- 🚀 Express.js  
- 🗄️ MongoDB  
- 📜 Mongoose  
- 🔓 CORS  
- 🔑 dotenv  

## 🚀 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/online-store.git
   cd online-store
2. **Install dependencies for both frontend and backend::**
    cd frontend
    npm install
    cd ../backend
    npm install
3. **Create a .env file in the backend directory and add your MongoDB URI and port:::**

    MONGO_URI=your_mongodb_uri
    PORT=5001

📖 Usage
1. **Start the backend server::**
    cd backend
    npm run dev
    
2. **Start the frontend development server::**
    cd frontend
    npm run dev

3. **Open your browser and go to: http://localhost:5173:**


📡 API Endpoints
Product Routes
http
Copy
GET    /products        # Get all products
GET    /products/:id    # Get a single product
POST   /products        # Create a new product
PUT    /products/:id    # Update an existing product
DELETE /products/:id    # Delete a product