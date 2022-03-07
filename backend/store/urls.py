from django.urls import path

from store.views import ProcessorsAPIView, ProcessorCreateAPIView, ProcessorDetail, ProcessorUpdateAPIView, ProcessorDelete

urlpatterns = [
    path('processors/', ProcessorsAPIView.as_view(), name='processors'),
    path('processors/add/', ProcessorCreateAPIView.as_view(), name='processor_create'),
    path('processors/<slug:slug>', ProcessorDetail.as_view(), name='processor_detail'),
    path('processors/<slug:slug>/update', ProcessorUpdateAPIView.as_view(), name='processor_update'),
    path('processors/<slug:slug>/delete', ProcessorDelete.as_view(), name='processor_delete'),
]
