import json  # for test

from ..models import Genres
from ..serializers import GenreSerializer


class GenreService:

    def multiple_create(self, request):
        """
            Insert multiple data altogether when coming from TMDB API
            {'genres': [{'id': 28, 'name': 'Action'}, {'id': 12, 'name': 'Adventure'}]}
            1. If genre already store, get that, append in list
            2. New genres store, append those in list
        """
        data = []
        genre = []
        for item in request.data["genres"]:
            if not Genres.objects.filter(name=item["name"]):
                data.append({
                    "name": item["name"],
                    "main_parent": "Movies",
                    "parent": ""
                })
            else:
                genre.append(Genres.objects.get(name=item['name']))  # Step 1

        if len(data):  # Step 2
            serializer = GenreSerializer(data=data, many=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            [genre.append(Genres.objects.get(id=item['id'])) for item in serializer.data]

        return genre

