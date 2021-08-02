from django.db import models


# All types of genres.
class Genres(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


# All Movie rating Type, such as PG-13.
class FilmRatings(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'config_setup_film_ratings'


# Persons Job: actor, director
class Occupations(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)


# API site from where information will gather
class ApiSites(models.Model):
    name = models.CharField(max_length=50)
    link = models.TextField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    # Later
    # created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'config_setup_api_sites'
