from django.db import models


class PaperLib(models.Model):
    Id = models.AutoField(primary_key=True)
    Lp = models.IntegerField()
    Nr = models.IntegerField()
    Data = models.DateField()
    Dzial = models.CharField(max_length=100)
    Artykol = models.CharField(max_length=100)
    Autor = models.CharField(max_length=100)
    Uwagi = models.CharField(max_length=150)
