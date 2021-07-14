from django.apps import AppConfig


class PersonsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'applications.persons'
    verbose_name = 'persons'
