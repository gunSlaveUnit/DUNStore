from django.urls import path

from store.views import Processors, ProcessorCreate

urlpatterns = [
    path('processors/', Processors.as_view(), name='processors'),
    path('processors/add', ProcessorCreate.as_view(), name='processor_create'),
]
