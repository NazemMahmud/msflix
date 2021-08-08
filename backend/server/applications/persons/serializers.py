from rest_framework import serializers
from .models import Persons


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persons
        read_only_fields = ("id", "created_at")
        fields = '__all__'
