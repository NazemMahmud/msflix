from rest_framework import serializers
from .models import Movies, MovieGenres


class MovieSerializer(serializers.ModelSerializer):
    # allow to create/update only content field. Other fields will be read-only.
    class Meta:
        model = Movies
        # read_only_fields = ("id", "created_at", "created_by")
        fields = '__all__'


class MovieGenreSerializer(serializers.ModelSerializer):
    # allow to create/update only content field. Other fields will be read-only.
    class Meta:
        model = MovieGenres
        read_only_fields = ("id",)
        fields = '__all__'
