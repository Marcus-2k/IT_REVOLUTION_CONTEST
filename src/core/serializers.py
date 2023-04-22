from rest_framework import serializers
from .models import *


class RealEstateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealEstate
        fields = ('id', 'title', 'image')


class RealEstateDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealEstate
        exclude = ('is_archived', 'in_rent', 'is_active_in_lease', '')
        fields = '__all__'

