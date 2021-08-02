from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.test import APIRequestFactory
from applications.config_setup.views import GenreViewSet

import json  # for test


from .models import Movies
from .serializers import MovieSerializer
from .utils.movie_service import MovieService


class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movies.objects.all()
    """
        Create a model instance.
        {
    "adult": false,
    "backdrop_path": "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
    "belongs_to_collection": null,
    "budget": 200000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "https://www.marvel.com/movies/black-widow",
    "imdb_id": "tt3480822",
    "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    "production_companies": [
        {
            "id": 420,
            "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
            "name": "Marvel Studios",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],


}
    """
    def create(self, request, *args, **kwargs):
        if "genres" in request.data:  # that is coming from TMDB API
            movie_service = MovieService()
            movie = movie_service.create(request)
            return Response({"data": movie.data, "success": True}, status=status.HTTP_201_CREATED)

        else:  # Normal API store
            response = super().create(request, *args, **kwargs)
            return Response({"data": response.data, "success": True}, status=status.HTTP_201_CREATED)
