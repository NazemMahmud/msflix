from rest_framework import serializers
from .models import Genres, FilmRatings


class GenreSerializer(serializers.ModelSerializer):
    # allow to create/update only content field. Other fields will be read-only.
    class Meta:
        model = Genres
        read_only_fields = ("id", "created_at")
        fields = '__all__'


# All Film rating Type, such as PG-13.
class FilmRatingSerializer(serializers.ModelSerializer):
    # name = models.CharField(max_length=50)
    class Meta:
        model = FilmRatings
        read_only_fields = ("id", "created_at")
        fields = '__all__'
