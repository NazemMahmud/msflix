from django.urls import path
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import GenreViewSet

router = DefaultRouter(trailing_slash=False)
router.register("genres", GenreViewSet, basename="genres")

urlpatterns = [
    path('', include(router.urls)),
]
