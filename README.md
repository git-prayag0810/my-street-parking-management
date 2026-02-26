# Street Parking Management System

A full-stack modern web application for finding, booking, and managing street parking slots in real-time. Created using React, Vite, Node.js, Express, MongoDB, and Tailwind CSS.

## Features

**User:**
- User Registration & Login (JWT Authentication)
- View available parking slots on an interactive map
- Real-time slot availability (Socket.io)
- Book parking slots and integration with Stripe (Test mode)
- User dashboard for booking history

**Admin:**
- Secure admin role access
- Add/Edit/Delete parking zones and slots
- Set pricing
- Monitor occupancy in real-time

**Tech Stack:**
- **Frontend:** React.js, Tailwind CSS v4, Framer Motion, Axios
- **Backend:** Node.js, Express, Mongoose, Socket.io, Stripe
- **Database:** MongoDB

---

## Folder Structure

```
street-parking-app/
│
├── backend/                       # Node/Express Backend API
│   ├── controllers/               # API route logic
│   ├── middlewares/               # JWT & Error handlers
│   ├── models/                    # MongoDB Schemas (User, ParkingZone, Slot, Booking, Payment)
│   ├── routes/                    # API route definitions
│   ├── server.js                  # Entry point (Express & Socket.io)
│   └── package.json
│
├── src/                           # React Frontend
│   ├── api/                       # Axios client
│   ├── components/                # Reusable UI components (Navbar, Cards)
│   ├── context/                   # React Context Providers (Auth)
│   ├── pages/                     # Full-page components (Landing, Map, Dashboard, Auth)
│   ├── App.tsx                    # Routing configuration
│   └── main.tsx                   # React root entry
│
├── package.json                   # Frontend dependencies
└── vite.config.ts                 # Vite config with Tailwind CSS v4
```

---

## Setup Instructions

### 1. Prerequisites
- Node.js (v18+ recommended)
- MongoDB installed locally or a MongoDB Atlas URI
- Yarn or npm

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
   *Note: If `npm` crashes on your machine, try using `yarn install` instead.*
3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in your details (MongoDB URI, JWT Secret, Stripe Secret).
4. Start the development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. In the root directory (`street-parking-app/`), install frontend dependencies:
   ```bash
   # Use npm
   npm install --legacy-peer-deps
   
   # OR use Yarn (Recommended if npm crashes on Windows)
   yarn install
   ```
2. Set up environment variables:
   Copy root `.env.example` to `.env` and add your Google Maps API Key.
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## Deployment Steps

### Deploying the Backend on Render
1. Push the repository to GitHub.
2. Log in to Render (render.com) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the **Root Directory** to `backend`.
5. Set the Build Command to `npm install` and Start Command to `node server.js`.
6. Add the environment variables (`MONGODB_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`) under Advanced settings.
7. Deploy!

### Deploying the Frontend on Vercel
1. Log in to Vercel (vercel.com) and import the repository.
2. In the "Framework Preset", select **Vite**.
3. Under "Environment Variables", add `VITE_API_URL` (pointing to your deployed Render URL) and `VITE_GOOGLE_MAPS_API_KEY`.
4. Deploy!

## License
MIT License
