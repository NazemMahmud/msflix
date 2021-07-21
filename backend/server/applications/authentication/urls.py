from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from djoser import urls

urlpatterns = [
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.jwt')),
]