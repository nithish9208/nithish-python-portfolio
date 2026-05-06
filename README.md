# Professional Python Developer Portfolio

A modern, high-performance developer portfolio built with a **React (Vite)** frontend and a **Python (FastAPI)** backend.

## Architecture

This project is separated into a clean full-stack architecture:

- **`frontend/`**: Contains the React application powered by Vite, utilizing Framer Motion for animations, Tailwind CSS for styling, and Lucide React for iconography.
- **`backend/`**: Contains the Python FastAPI server, responsible for serving dynamic data (projects, skills, experience) to the frontend and handling API requests like contact form submissions.

## Getting Started

### Quick Start (Windows)
To start both the frontend and backend simultaneously, simply run the included batch script from the root directory:
```cmd
run.bat
```
This will install any missing Node modules, start the FastAPI server on port 8000, and launch the Vite development server on port 5173.

To stop the servers, run:
```cmd
stop.bat
```

### Manual Setup

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Features
- **Dynamic Content**: Data is served from a Python backend, making it easy to integrate with a database in the future.
- **Interactive Simulations**: Real-time component simulations of backend tasks (Attendance System, CSV Data Tool, etc.).
- **Modern UI**: Dark-themed, glassmorphism UI with smooth micro-animations.
