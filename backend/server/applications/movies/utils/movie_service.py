from rest_framework import viewsets, status
from rest_framework.response import Response

import json  # for test
from datetime import datetime
from collections import namedtuple

from ..models import Movies
from ..serializers import MovieSerializer, MovieGenreSerializer
from applications.config_setup.utils.config_service import GenreService


class MovieService:
    tmdb_data = dict()
    def create(self, request):
        """
            1. Create Genre if not stored || get Genre IDs
            2. Store Film Rating
            3. Create Movie with rating
            4. Store Movie-Genre Relation
        """
        self.tmdb_data = request.data
        # Step 1: Store genre
        data = {
            "data": {
                "genres": request.data["genres"]
            }
        }
        genre = namedtuple("genre", data.keys())(*data.values()) # convert dict to obj
        genre_service = GenreService()
        genres = genre_service.multiple_create(genre)  # Genres [<Genres: 1: Action>, <Genres: 2: Adventure>]
        genre_ids = []
        [genre_ids.append(item.id) for item in genres]  # [1, 2, 3, 4, 15, 16]
        # print(f"Genre: {genres}")
        # print(f"Genre Ids: {genre_ids}")

        # Step 2: Store movie
        movie = self.movie_create(request)

        """
            # Step 3 : Store movie genre
            For Movies.objects.get(id=serializer.data['id'])-> "Incorrect type. Expected pk value, received Movies."
            Fields should be, movie and genre, not genres
            For Genre objects:  "Incorrect type. Expected pk value, received list."
        """
        mg_data = {
            "data": {
                "movie": Movies.objects.get(id=movie.data['id']).id,
                "genres": genre_ids
            }
        }
        movie_genres = namedtuple("movie_genres", mg_data.keys())(*mg_data.values()) # convert dict to obj
        print(f"Movie genre: {movie_genres}")
        self.movie_genre_create(movie_genres)
        return movie

    def movie_create(self, request):

        release_date = datetime.strptime(request.data["release_date"], "%Y-%m-%d")
        # language_data = {
        #     "data": {
        #         "code": request.data["original_language"]
        #     }
        # }
        language = ""
        if "spoken_languages" in request.data:
            for item in request.data["spoken_languages"]:
                if item["iso_639_1"] == request.data["original_language"]:
                    language = item["english_name"]

        data = {
            "name": request.data["original_title"],
            "movie_type": "Movies",
            "release_year": release_date.year,
            "runtime": request.data["runtime"],
            "video_type": "",
            "audio_type": "",
            "description": request.data["overview"],
            "tags": request.data["tagline"],
            "film_rating": "",
            "language": language
        }

        serializer = MovieSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer

    def movie_genre_create(self, request):

        data = []
        [data.append({"movie": request.data["movie"], "genre": item}) for item in request.data["genres"]]
        # [{"movie": 22, "genre": 10}, {"movie": 22, "genre": 11}, {"movie": 22, "genre": 12}]
        serializer = MovieGenreSerializer(data=data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
