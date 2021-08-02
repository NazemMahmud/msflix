import json  # for test

from utils.api_service import ApiService
from ..models import Genres, FilmRatings
from ..serializers import GenreSerializer, FilmRatingSerializer


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


class FilmRatingService:

    def film_rating_create(self, request):
        """
            Insert data from TMDB API
            :param request : it has only movie_id
            If not store, create new
        """
        movie_id = request.data["movie_id"]
        api_service = ApiService
        film_ratings = api_service().get_api("movie_release_date", movie_id)
        certification = [item["release_dates"][0]["certification"] for item in film_ratings["results"] if item["iso_3166_1"] == "US"]

        if not FilmRatings.objects.filter(name=certification[0]):
            data = {
                "name": certification[0]
            }
            serializer = FilmRatingSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

        rating = FilmRatings.objects.get(name=certification[0])
        return rating
