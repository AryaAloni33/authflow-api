# 🔐 AuthFlow API

A secure and scalable **authentication backend API** built with **Node.js, Express, MongoDB, and JWT**.
This project provides a ready-to-use authentication system that can be plugged into any frontend or mobile application.

---

## 🚀 Features

* User Registration with hashed passwords
* User Login with JWT authentication
* Secure password hashing using **bcrypt**
* Protected routes using **JWT middleware**
* Environment-based configuration
* Clean project structure (controllers, routes, middleware, models)
* Proper HTTP status codes & error handling

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (JSON Web Tokens)**
* **bcrypt**
* **dotenv**

---

## 📁 Project Structure

```
AuthFlow-API/
├── config/
│   └── connectionDB.js
├── src/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   └── routes/
│       └── authRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory (do **NOT** commit it).

Use `.env.example` as reference:

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
```

---

## ▶️ How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/AryaAloni33/authflow-api.git
cd authflow-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

```bash
cp .env.example .env
```

Fill in your MongoDB URL and JWT secret.

4. **Start the server**

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

### Register User

**POST** `/api/auth/register`

```json
{
  "email": "test@gmail.com",
  "password": "password123"
}
```

---

### Login User

**POST** `/api/auth/login`

```json
{
  "email": "test@gmail.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}
```

---

### Protected Profile Route

**GET** `/api/auth/profile`

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**

```json
{
  "message": "Profile accessed",
  "user": {
    "user_id": "...",
    "iat": "...",
    "exp": "..."
  }
}
```

---

## 🧠 How Authentication Works (Simple Explanation)

1. User logs in with email & password
2. Server verifies credentials
3. Server generates a **JWT**
4. Client stores the token
5. Token is sent in `Authorization` header
6. Middleware verifies token before accessing protected routes

---

## 🧩 What Can This Project Be Used For?

This backend can be used as:

* 🔹 Authentication system for **React / Next.js apps**
* 🔹 Backend auth for **mobile apps (React Native / Flutter)**
* 🔹 Starter auth service for **SaaS products**
* 🔹 Boilerplate for **role-based access systems**
* 🔹 Learning reference for **JWT & backend security**

Basically — **any app that needs login & protected APIs**.

---

## 🛡️ Security Practices Used

* Passwords are **never stored in plain text**
* JWT secrets are kept in environment variables
* Protected routes use middleware
* Proper HTTP status codes
* Sensitive files excluded via `.gitignore`

---

## 📌 Future Improvements

* Refresh tokens
*  Role-based authorization (Admin/User)
*  Email verification
*  Password reset flow
*  Rate limiting
*  Automated tests

---




