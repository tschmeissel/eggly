cd ..\..\
call bin\startup.bat
cd webapps\eggly


call start "" "%APPDATA%\..\Local\Programs\Git\bin\sh.exe" --login

REM TODO make sure loading does not stop after loading chrome
REM "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -incognito

call "C:\Program Files (x86)\Notepad++\notepad++.exe" -openSession "notepad++.session"



