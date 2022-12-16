command = "home/danil/workspace/backend-api/venv/bin/gunicorn" #путь расположения Gunicorn
python_path = "workspace/backend-api/dvizhenie/dvizhenie" #путь к разводящему приложению
bind = "127.0.0.1:8001" #Порт, который будет слушать Django
workers = 5 # Кол-во запущенных процессов
user = "danil" #Пользователь, от имени которого будет запущен Django
raw_env = "DJANGO_SETTINGS_MODULE=dvizhenie.settings" #Переменная окружения с setting.py
