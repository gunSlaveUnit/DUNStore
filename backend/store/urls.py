from django.urls import path

from store.views import Processors

urlpatterns = [
    path('processors/', Processors.as_view(), name='processors')
]
