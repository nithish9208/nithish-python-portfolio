@echo off
echo Stopping the Developer Server...
taskkill /F /IM node.exe
taskkill /F /IM python.exe
echo Done.
pause
