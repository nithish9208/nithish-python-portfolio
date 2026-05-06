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
:: Check if node_modules exists, if not install
if not exist "node_modules\" (
    call npm install
)

:: Start the development server and open the browser automatically
call npm run dev -- --open
