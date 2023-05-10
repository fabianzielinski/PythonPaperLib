from rest_framework import serializers
from .models import Magazine


class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazine
        fields = ('Id',
                  'Czasopismo',
                  'Nr',
                  'Data',
                  'Dzial',
                  'Artykol',
                  'Autor',
                  'Uwagi')
