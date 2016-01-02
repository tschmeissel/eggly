REM TOMCAT
cd ..\..\
call bin\startup.bat
cd webapps\eggly

REM git bash
call start "" "%APPDATA%\..\Local\Programs\Git\bin\sh.exe" --login

start "" "C:\Program Files (x86)\Notepad++\notepad++.exe" -openSession "notepad++.session"

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -incognito
