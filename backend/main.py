from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Portfolio Backend API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}

@app.post("/api/contact")
def submit_contact_form(message: ContactMessage):
    # In a real app, you would send an email or save to a database here
    print(f"Received message from {message.name} ({message.email}): {message.message}")
    return {"status": "success", "message": "Message received"}

# Data endpoints
@app.get("/api/projects")
def get_projects():
    return [
        {
            "id": "attendance",
            "title": "Employee Attendance Management",
            "category": "Automation / Backend",
            "description": "A robust system for tracking employee check-ins, generating attendance reports, and managing admin controls. Built with security and scalability in mind.",
            "icon": "Server",
            "iconColor": "text-indigo-400",
            "tags": ["Python", "SQLite", "Report Generation"],
            "simulationId": "AttendanceSim",
            "repo": "#",
            "demo": "#"
        },
        {
            "id": "csv",
            "title": "CSV Data Automation Tool",
            "category": "Data Engineering",
            "description": "Automated pipeline for cleaning, normalizing, and deduplicating large CSV datasets. Features drag-and-drop processing and intelligent duplicate detection.",
            "icon": "FileText",
            "iconColor": "text-emerald-400",
            "tags": ["Pandas", "NumPy", "Data Cleaning"],
            "simulationId": "CSVSim",
            "repo": "#",
            "demo": "#"
        },
        {
            "id": "analytics",
            "title": "Sales Data Analytics Dashboard",
            "category": "Data Visualization",
            "description": "Interactive visualization tool for sales performance metrics, region-wise analytics, and revenue forecasting using modern data stacks.",
            "icon": "BarChart3",
            "iconColor": "text-blue-400",
            "tags": ["Python", "Matplotlib", "Seaborn"],
            "simulationId": "AnalyticsSim",
            "repo": "#",
            "demo": "#"
        },
        {
            "id": "student",
            "title": "Student Record Management",
            "category": "Database / CRUD",
            "description": "A complete CRUD application for maintaining student databases, calculating grade metrics, and searching records efficiently.",
            "icon": "Database",
            "iconColor": "text-orange-400",
            "tags": ["Python", "MySQL", "GUI Development"],
            "simulationId": "StudentSim",
            "repo": "#",
            "demo": "#"
        }
    ]

@app.get("/api/skills")
def get_skills():
    return [
        { "name": "Python", "level": 90, "color": "bg-cyan-500", "icon": "python" },
        { "name": "SQL (PostgreSQL/MySQL)", "level": 85, "color": "bg-blue-500", "icon": "postgresql" },
        { "name": "Pandas & NumPy", "level": 80, "color": "bg-emerald-500", "icon": "pandas" },
        { "name": "Git", "level": 75, "color": "bg-orange-500", "icon": "git" },
        { "name": "Excel Automation", "level": 90, "color": "bg-green-600", "icon": "excel" },
    ]

@app.get("/api/experience")
def get_experience():
    return [
        {
            "role": "Python & Data Operations Intern",
            "company": "RR IT Solutions",
            "period": "2023 - Present",
            "description": "Spearheading automation initiatives and data pipeline optimization for client datasets.",
            "highlights": [
                "Developed automation scripts reducing manual data entry by 70%",
                "Optimized SQL queries for reporting workflows, improving performance by 40%",
                "Implemented Python-based data cleaning pipelines for messy CSV datasets",
                "Automated reporting workflows using Pandas and Matplotlib"
            ]
        }
    ]
