@echo off
echo Starting Dheghom site preview...
echo.
echo When it's ready, open your browser to: http://127.0.0.1:8000
echo Press Ctrl+C to stop the preview.
echo.
D:
cd "D:\OneDrive\Documents\Claude\Projects\Dheghom\dheghom-site"
"C:\Users\the_b\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe" -m mkdocs serve
pause
