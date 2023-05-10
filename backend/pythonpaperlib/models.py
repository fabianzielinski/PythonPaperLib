from django.db import models


class Magazine(models.Model):
    Id = models.AutoField(primary_key=True)
    Czasopismo = models.CharField(max_length=100)
    Nr = models.IntegerField()
    Data = models.DateField()
    Dzial = models.CharField(max_length=100)
    Artykol = models.CharField(max_length=100)
    Autor = models.CharField(max_length=100)
    Uwagi = models.CharField(max_length=150)
