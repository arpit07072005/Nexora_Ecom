# 🛒 E-Commerce Cart Application (MERN Stack)

A simple and complete **Full Stack Shopping Cart App** built using **React, Node.js, Express, MongoDB** as per the assignment requirements by Nexora

---

## ✅ Features (As per Assignment)

| Feature | Description |
|---------|-------------|
| `GET /api/products` | Fetch 7 mock products |
| `POST /api/cart` | Add product `{productId, qty}` to cart |
| `DELETE /api/cart/:id` | Remove item by cart ID |
| `GET /api/cart` | Get all cart items  |
| `POST /api/checkout` | Mock checkout → returns receipt `{total, timestamp}` |
| Frontend | Products page, Cart Page, Add to cart, Checkout modal |
| Database | MongoDB with Mongoose models for Product & Cart |
| Bonus | Persistent cart, quantity update, responsive UI |

---
## ⚙️ Tech Stack

| Frontend | Backend | Database | Tools |
|----------|---------|----------|-------|
| React (Vite) | Node.js | MongoDB (Mongoose) | Axios |
| CSS Modules | Express.js | MongoDB Atlas / Local | Postman |

---
## 🚀 Setup Instructions
### 📌 1. Clone Repository
```bash
git clone https://github.com
```
### 📌 2. Setup Backend
```
cd Ecom_backend
npm install
```
####  Create .env file:
```
DB_URI=mongodb+srv://(dbname):(password)@cluster0.qrfd4mn.mongodb.net
DB_NAME=anyname
PORT=4000
ORIGIN=*(or frontend url)
```
#### Start server:
```
npm start
```
### 📌 3. Setup Frontend
```
cd ../frontend
npm install
npm run dev
```
## 🌐 API Endpoints

| Method | Endpoint          | Description                 |
|--------|--------------------|-----------------------------|
| GET    | /api/products     | Fetch all products          |
| POST   | /api/cart         | Add product to cart         |
| GET    | /api/cart         | Get cart items + total      |
| DELETE | /api/cart/:id     | Delete item from cart       |
| POST   | /api/checkout     | Mock checkout & receipt     |
### 🎥 Demo Video 
```
https://youtu.be/v3fWAruPWxI?si=AEOFjVYp6p--dxfj
```
### ⚡ Toast Notification (React Toastify)

Used **React Toastify** to show success/error popup messages in the frontend.

#### ✅ Installation:
```bash
npm install react-toastify
```
