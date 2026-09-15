# Smart Student Helpdesk - Express Backend

This is the Node.js + Express backend service migrating the legacy PHP backend to an ES Module, RESTful API architecture with MongoDB and Mongoose.

## Requirements
- Node.js (v18 or higher recommended)
- MongoDB instance (local or MongoDB Atlas connection string)

## Setup & Installation

1. Navigate to the `server/` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   > **Note:** `MONGO_URI` must be filled in with a valid MongoDB connection string before the server will connect to the database.

   Example `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/smart_student_helpdesk?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key
   CLIENT_ORIGIN=http://localhost:5173
   ```

## Running the Server

- **Development mode** (runs with nodemon and live reload):
  ```bash
  npm run dev
  ```

- **Production mode**:
  ```bash
  npm start
  ```

## Available Endpoints (Authentication)

- `POST /api/auth/register` - Register a new user (`name`, `email`, `password`, `role`, `department`)
- `POST /api/auth/login` - Login (`email`, `password`, optional `role`)
- `POST /api/auth/logout` - Clear auth cookie
- `GET /api/auth/check-session` - Validate active session via JWT cookie
