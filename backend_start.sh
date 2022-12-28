#!/bin/bash

# 数据初始化
python manage.py makemigrations
python manage.py migrate

# 启动后端环境
#daphne -b 0.0.0.0 -p 8008 zmgams.asgi:application
python manage.py runserver 0.0.0.0:8000
