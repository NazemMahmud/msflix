from rest_framework import serializers
from .models import Genres


class GenreSerializer(serializers.ModelSerializer):
    # allow to create/update only content field. Other fields will be read-only.
    class Meta:
        model = Genres
        read_only_fields = ("id", "created_at")
        fields = '__all__'
