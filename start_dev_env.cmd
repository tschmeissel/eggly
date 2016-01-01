cd ..\..\
call bin\startup.bat
cd webapps\eggly
call start "" "%APPDATA%\..\Local\Programs\Git\bin\sh.exe" --login
call "C:\Program Files (x86)\Notepad++\notepad++.exe" -openSession "notepad++.session"

