from django.db import models
from applications.config_setup.models import Occupations


# Persons (actor, director basic info)
class Persons(models.Model):
    name = models.CharField(max_length=50)
    image = models.TextField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    # Later
    # created_by = models.ForeignKey(User, models.SET_NULL)


# Persons (actor, director basic info)
class PersonJobs(models.Model):
    person = models.ForeignKey(Persons, on_delete=models.CASCADE)
    job = models.ForeignKey(Occupations, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # Later
    # created_by = models.ForeignKey(User, models.SET_NULL)

    class Meta:
        db_table = "persons_person_jobs"
