from django.urls import path
from .views import *


urlpatterns = [
    path('users/register/', CreateCustomUserView.as_view())
]

