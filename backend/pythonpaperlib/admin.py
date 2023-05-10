from django.contrib import admin
from .models import Magazine

models_list = [Magazine]
admin.site.register(models_list)
