from django.apps import AppConfig


class ConfigSetupConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'applications.config_setup'
    verbose_name = 'configs'
