from datetime import datetime
from collections import namedtuple

from ..models import Movies
from ..serializers import MovieSerializer, MovieGenreSerializer
from applications.config_setup.utils.config_service import GenreService, FilmRatingService
from applications.persons.utils.person_service import PersonService


class MovieService:
    tmdb_data = dict()
    new_movie = dict()

    def create(self, request):
        """
            1. Store Film Rating -> get Genre IDs
            2. Create Movie with rating
            3. Create Genre if not stored -> get Genre IDs; Store Movie-Genre Relation
            4. Create new person (actor / director) from movie credit -> Create Movie cast/credits relation
            6.
            :return: Movie Object
        """
        self.tmdb_data = request.data
        movie_id_dict = {
            "data": {
                "movie_id": request.data["id"]
            }
        }
        movie_id_obj = namedtuple("movie_id_obj", movie_id_dict.keys())(*movie_id_dict.values())  # convert dict to obj

        # Step 1: Store film ratings
        film_rating_service = FilmRatingService()
        film_rating = film_rating_service.film_rating_create(movie_id_obj)
        request.data["film_rating"] = film_rating.name

        # Step 2: Store movie
        self.new_movie = self.movie_create(request)

        # Step 3: Store genre
        genres = self.genre_create()

        # Step 4: Cast / Credit
        genres = self.credit_create(movie_id_obj)

        return self.new_movie

    def genre_create(self):
        """
            * Create new genre/s
            * Create Movie-Genre relation
            :return: New Genre object
        """
        data = {
            "data": {
                "genres": self.tmdb_data.data["genres"]
            }
        }
        genre = namedtuple("genre", data.keys())(*data.values())  # convert dict to obj
        genre_service = GenreService()
        genres = genre_service.multiple_create(genre)  # Genres [<Genres: 1: Action>, <Genres: 2: Adventure>]
        genre_ids = []
        [genre_ids.append(item.id) for item in genres]  # [1, 2, 3, 4, 15, 16]

        """
            # Step : Store movie genre
            For Movies.objects.get(id=serializer.data['id'])-> "Incorrect type. Expected pk value, received Movies."
            Fields should be, movie and genre, not genres
            For Genre objects:  "Incorrect type. Expected pk value, received list."
        """
        mg_data = {
            "data": {
                "movie": Movies.objects.get(id=self.new_movie.data['id']).id,
                "genres": genre_ids
            }
        }
        movie_genres = namedtuple("movie_genres", mg_data.keys())(*mg_data.values())  # convert dict to obj
        print(f"Movie genre: {movie_genres}")
        self.movie_genre_create(movie_genres)

        return genres

    def credit_create(self, movie_id_obj):
        person_service = PersonService()
        persons = person_service.multiple_create(movie_id_obj)
        # request.data["film_rating"] = film_rating.name
        # genres = genre_service.multiple_create(genre)  # Genres [<Genres: 1: Action>, <Genres: 2: Adventure>]
        # genre_ids = []
        # [genre_ids.append(item.id) for item in genres]  # [1, 2, 3, 4, 15, 16]

        """
            # Step : Store movie genre
            For Movies.objects.get(id=serializer.data['id'])-> "Incorrect type. Expected pk value, received Movies."
            Fields should be, movie and genre, not genres
            For Genre objects:  "Incorrect type. Expected pk value, received list."
        """
        # mg_data = {
        #     "data": {
        #         "movie": Movies.objects.get(id=self.new_movie.data['id']).id,
        #         "genres": genre_ids
        #     }
        # }
        # movie_genres = namedtuple("movie_genres", mg_data.keys())(*mg_data.values())  # convert dict to obj
        # print(f"Movie genre: {movie_genres}")
        # self.movie_genre_create(movie_genres)

        return persons

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
            "film_rating": request.data["film_rating"],
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
