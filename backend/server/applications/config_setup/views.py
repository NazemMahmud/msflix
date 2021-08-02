from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response

import json  # for test
from datetime import datetime
from collections import namedtuple

from .models import Genres
from .serializers import GenreSerializer


class GenreViewSet(viewsets.ModelViewSet):
    serializer_class = GenreSerializer
    queryset = Genres.objects.all()
    """
        Create a model instance.
        Original: {
            "name": "",  "movie_type": null, "release_year": null, "runtime": "",  "video_type": "",   
            "audio_type": "", "description": "",  "tags": "",  "film_rating": null, "language": null
        }
        From API: {
            "genres": [
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 12,
                    "name": "Adventure"
                },
            ],
            
            "spoken_languages": [
                {
                    "english_name": "English",
                    "iso_639_1": "en",
                    "name": "English"
                },
                {
                    "english_name": "Russian",
                    "iso_639_1": "ru",
                    "name": "Pусский"
                }
            ],
        }
    """
    def create(self, request, *args, **kwargs):
        genre = request

        # Normal API store
        response = super().create(genre, *args, **kwargs)
        return Response(response, status=status.HTTP_201_CREATED)
        # serializer = self.get_serializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # self.perform_create(serializer)
        # headers = self.get_success_headers(serializer.data)
        # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # def perform_create(self, serializer):
    #         serializer.save()
    #
    # def get_success_headers(self, data):
    #     try:
    #         return {'Location': str(data[api_settings.URL_FIELD_NAME])}
    #     except (TypeError, KeyError):
    #         return {}
