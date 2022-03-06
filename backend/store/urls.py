from django.urls import path

from store.views import Processors, ProcessorCreate, ProcessorDetail, ProcessorUpdate, ProcessorDelete

urlpatterns = [
    path('processors/', Processors.as_view(), name='processors'),
    path('processors/add/', ProcessorCreate.as_view(), name='processor_create'),
    path('processors/<slug:slug>', ProcessorDetail.as_view(), name='processor_detail'),
    path('processors/<slug:slug>/update', ProcessorUpdate.as_view(), name='processor_update'),
    path('processors/<slug:slug>/delete', ProcessorDelete.as_view(), name='processor_delete'),
]
