import json  # for test
from django.conf import settings

from utils.api_service import ApiService
from ..models import Persons
from ..serializers import PersonSerializer

class PersonService:

    def multiple_create(self, request):
        """
            * Insert multiple persons altogether when coming from TMDB API, if not in DB
            "cast": [
                    {"original_name": "Scarlett Johansson",
                    "name": "Scarlett Johansson",
                    "profile_path": "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
                    "character": "Natasha Romanoff / Black Widow",
                    "known_for_department": "Acting",
                    },]
            *. Get all jobs in a set, convert into list, store those in DB

        """
        movie_id = request.data["movie_id"]
        api_service = ApiService()
        movie_credits = api_service.get_api("movie_credits", movie_id)
        credits = []
        jobs = set()
        for item in movie_credits["cast"]:
            jobs.add(item["known_for_department"])
            data = dict()
            if not Persons.objects.filter(name=item["name"]):
                data = {
                    "name": item["name"],
                    "image": settings.TMDB_IMAGE_PATH + item["profile_path"],
                }
                serializer = PersonSerializer(data=data)
                serializer.is_valid(raise_exception=True)
                serializer.save()

                person = serializer.data
                data["id"] = person.id
                data["known_for_department"] = item["known_for_department"]
            else:
                person = Persons.objects.get(name=item["name"])
                data = {
                    "id": person.id,
                    "name": person.name,
                    "known_for_department": item["known_for_department"],
                    "image": person.image,
                }

            if "character" in item:
                data["character"] = item["character"]
            credits.append(data)
            # certification = [item["release_dates"][0]["certification"] for item in film_ratings["results"] if item["iso_3166_1"] == "US"]

        return credits

# class FilmRatingService:
#
#     def film_rating_create(self, request):
#         """
#             Insert data from TMDB API
#             :param request : it has only movie_id
#             If not store, create new
#         """
#         movie_id = request.data["movie_id"]
#         api_service = ApiService
#         film_ratings = api_service().get_api("movie_release_date", movie_id)
#         certification = [item["release_dates"][0]["certification"] for item in film_ratings["results"] if item["iso_3166_1"] == "US"]
#
#         if not FilmRatings.objects.filter(name=certification[0]):
#             data = {
#                 "name": certification[0]
#             }
#             serializer = FilmRatingSerializer(data=data)
#             serializer.is_valid(raise_exception=True)
#             serializer.save()
#
#         rating = FilmRatings.objects.get(name=certification[0])
#         return rating
