@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Scofield — Creator Hub

echo.
echo  ========================================
echo   Scofield Creator Hub
echo   Muzyka startuje automatycznie po wejsciu
echo  ========================================
echo.

where python >nul 2>&1
if errorlevel 1 (
  echo  [!] Brak Pythona. Zainstaluj z python.org
  echo      albo otworz index.html recznie.
  pause
  exit /b 1
)

echo  [1/2] Start serwera lokalnego...
start /min "CreatorHub-Serwer" cmd /c "cd /d "%~dp0" && python -m http.server 8765"
ping -n 3 127.0.0.1 >nul

set "URL=http://127.0.0.1:8765/"
set "FLAGS=--autoplay-policy=no-user-gesture-required --new-window"

echo  [2/2] Otwieranie przegladarki...

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" %FLAGS% "%URL%"
  goto ok
)

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" %FLAGS% "%URL%"
  goto ok
)

if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" %FLAGS% "%URL%"
  goto ok
)

start "" "%URL%"
echo  Uzyto domyslnej przegladarki - jesli brak dzwieku, zainstaluj Chrome.

:ok
echo.
echo  Strona: %URL%
echo  Nie zamykaj okna "CreatorHub-Serwer" (minimalizowane).
echo  Zamknij je, gdy konczysz korzystanie ze strony.
echo.
pause
