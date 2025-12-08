# MERN Todo List Application

A simple and clean full-stack Todo List application built with MongoDB, Express, React, and Node.js.

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Real-time task counter
- Clean and responsive UI
- RESTful API backend

## Project Structure

```
Todolist/
├── backend/
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoItem.js
│   │   │   └── TodoItem.css
│   │   ├── services/
│   │   │   └── todoService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (running locally or MongoDB Atlas account)

## Installation & Setup

### 1. Clone or Download the Project

Navigate to the project directory:
```bash
cd Todolist
```

### 2. Set Up MongoDB

**Option A: Local MongoDB**
- Install MongoDB on your machine
- Start MongoDB service:
  ```bash
  # Windows
  net start MongoDB

  # macOS/Linux
  sudo systemctl start mongod
  ```

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a cluster and get your connection string
- Update the `MONGODB_URI` in `backend/.env` with your connection string

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

The `.env` file is already created in the backend folder with default values:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todolist
```

If using MongoDB Atlas, update `MONGODB_URI` with your connection string.

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Running the Application

You need to run both backend and frontend servers.

### Start the Backend Server

```bash
cd backend
npm start
```

The backend server will start on `http://localhost:5000`

For development with auto-restart:
```bash
npm run dev
```

### Start the Frontend Server

Open a new terminal window:

```bash
cd frontend
npm start
```

The React app will start on `http://localhost:3000` and automatically open in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create a new todo |
| PUT | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

## Usage

1. Open `http://localhost:3000` in your browser
2. Type a task in the input field and click "Add" or press Enter
3. Click the checkbox to mark a task as complete/incomplete
4. Click the "✕" button to delete a task
5. View the active task counter at the top of the list

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### Frontend
- React
- Axios
- CSS3

## Troubleshooting

**Backend won't start:**
- Ensure MongoDB is running
- Check if port 5000 is available
- Verify MongoDB connection string in `.env`

**Frontend can't connect to backend:**
- Ensure backend server is running on port 5000
- Check browser console for errors
- Verify `proxy` setting in `frontend/package.json`

**CORS errors:**
- The backend is configured with CORS middleware
- Ensure both servers are running on correct ports

## License

ISC
