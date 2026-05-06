@echo off
setlocal
title Nithishkumar K Portfolio - Developer Server

echo ===================================================
echo   Nithishkumar K - Personal Portfolio
echo   Premium Python Developer Portfolio
echo ===================================================
echo.

:: Check if node_modules exists, if not install
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed. Please check your Node.js installation.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Starting development server...
echo.
echo Press Ctrl+C to stop the server at any time.
echo.

call npm run dev

pause
