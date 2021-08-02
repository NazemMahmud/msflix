from django.db import models
from applications.config_setup.models import FilmRatings, Genres
from applications.persons.models import Persons


# main movie db
class Movies(models.Model):
    MOVIE = 'Movies'
    SERIES = 'TV Series'
    MOVIE_SERIES = [
        (MOVIE, 'Movies'),
        (SERIES, 'TV Series'),
    ]

    name = models.CharField(max_length=150)
    movie_type = models.CharField(max_length=20, choices=MOVIE_SERIES)
    release_year = models.IntegerField(null=False)
    runtime = models.CharField(max_length=100) # in mins, like 143 mins
    film_rating = models.CharField(max_length=25, null=True, blank=True) # like PG-13
    video_type = models.CharField(max_length=200, null=True, blank=True) # like 710p H264
    audio_type = models.CharField(max_length=200, null=True, blank=True) # like English AAC
    language = models.CharField(max_length=25, null=True, blank=True) # like English
    description = models.TextField(max_length=600, null=True, blank=True)
    tags = models.TextField(max_length=500, null=True, blank=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)


# Movie related images
class MovieImages(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    banner = models.TextField(blank=True, null=True)
    thumb = models.TextField(blank=True, null=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_movie_images"


# user ratings from different site such as imdb etc.
class UserRatings(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    site_name = models.CharField(max_length=150)
    site_link = models.TextField(blank=True)
    rating = models.FloatField(null=True)
    site_icon = models.TextField(max_length=255, blank=True, null=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_user_ratings"


# movie genre
class MovieGenres(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genres, on_delete=models.CASCADE)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_movie_genres"


# movie files
class MovieFiles(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    file_path = models.TextField(max_length=255)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_movie_files"


# movie subtitles
class Subtitles(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    language = models.CharField(max_length=25, null=True, blank=True)
    file_path = models.TextField(max_length=255, blank=True, null=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)


# Movie directors
class MovieDirectors(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    director = models.ForeignKey(Persons, on_delete=models.SET_NULL, null=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_movie_directors"


# Movie Writers
class MovieWriters(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    writer = models.ForeignKey(Persons, on_delete=models.SET_NULL, null=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_movie_writers"


# movie cast and crew
class MovieCasts(models.Model):
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    cast = models.ForeignKey(Persons, on_delete=models.SET_NULL, null=True)
    cast_name = models.CharField(max_length=150, null=True, blank=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "movies_movie_casts"
