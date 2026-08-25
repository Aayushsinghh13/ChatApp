# Fullstack Real-Time Chat Application

**Live Demo:** [https://chatapp-tdrb.onrender.com](https://chatapp-tdrb.onrender.com)

A modern, real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), featuring instant messaging, online presence indicators, image/video sharing, and secure authentication.

## 🌟 Features

*   **Real-time Messaging:** Powered by Socket.IO for instantaneous message delivery and typing/online indicators.
*   **Secure Authentication:** User authentication and session management handled by [Clerk](https://clerk.com/).
*   **Media Sharing:** Upload and share images and videos seamlessly using [ImageKit](https://imagekit.io/).
*   **Modern UI/UX:** Built with React, Tailwind CSS, and [HeroUI](https://heroui.com/) for a sleek, responsive, and accessible user interface.
*   **State Management:** Utilizes Zustand for lightweight, fast, and scalable frontend state management.
*   **Dockerized Deployment:** Includes a multi-stage `Dockerfile` optimized for production deployments on platforms like Render or DigitalOcean.

## 🛠️ Tech Stack

**Frontend:**
*   React 19 (via Vite)
*   Tailwind CSS v4 & HeroUI
*   Zustand
*   Socket.IO Client
*   Clerk React SDK

**Backend:**
*   Node.js & Express.js
*   MongoDB & Mongoose
*   Socket.IO
*   ImageKit Node SDK
*   Clerk Express SDK (with webhooks for DB sync)

## 🚀 Getting Started

### Prerequisites
*   Node.js (v20+ recommended)
*   MongoDB Atlas URI
*   Clerk Account (Publishable & Secret Keys)
*   ImageKit Account (Public, Private Keys & URL Endpoint)

### Environment Variables

Create a `.env` file in your `backend/` directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
FRONTEND_URL=http://localhost:5173
```

Create a `.env` file in your `frontend/` directory with your Clerk publishable key:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Installation

1. **Clone the repository**
2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```
3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

### Running Locally

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`

## 🐳 Docker Deployment

This repository includes a multi-stage Dockerfile designed for easy deployment to cloud providers.

To build and run the Docker image locally:

```bash
docker build --build-arg VITE_CLERK_PUBLISHABLE_KEY=your_key -t chatapp .
docker run -p 3001:3001 --env-file ./backend/.env chatapp
```

*Note: The Docker build is optimized for 512MB RAM free-tier instances (Vite minification is disabled by default to prevent OOM errors).*
