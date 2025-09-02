# accounts/urls.py
from django.urls import path
from .views import RegisterAPI, LoginAPI

urlpatterns = [
    path('signup/', RegisterAPI.as_view(), name='signup'),
    path('login/', LoginAPI.as_view(), name='login'),
]
