@echo off
:: If the script is called with the "hidden" argument, jump to the actual execution
if "%~1"=="hidden" goto :execute

:: Otherwise, relaunch this script completely hidden using VBScript
echo Set objShell = WScript.CreateObject("WScript.Shell") > "%temp%\run_hidden.vbs"
echo objShell.Run "cmd /c """"%~f0"""" hidden", 0, False >> "%temp%\run_hidden.vbs"
cscript //nologo "%temp%\run_hidden.vbs"
del "%temp%\run_hidden.vbs"
exit /b

:execute
:: Start Backend
cd backend
start /B cmd /c "uvicorn main:app --reload --port 8000"
cd ..

:: Start Frontend
cd frontend
if not exist "node_modules\" (
    call npm install
)
call npm run dev -- --open
