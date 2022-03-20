from django.urls import path

from store.views import ProcessorsAPIView, ProcessorCreateAPIView, ProcessorDetailAPIView, \
    ProcessorUpdateAPIView, ProcessorDeleteAPIView, \
    SupplyTypeAPIView, SupplyTypeCreateAPIView, SupplyTypeDetailAPIView, SupplyTypeUpdateAPIView, SupplyTypeDeleteAPIView

urlpatterns = [
    path('processors/', ProcessorsAPIView.as_view(), name='processors'),
    path('processors/add/', ProcessorCreateAPIView.as_view(), name='processor_create'),
    path('processors/<slug:slug>', ProcessorDetailAPIView.as_view(), name='processor_detail'),
    path('processors/<slug:slug>/update', ProcessorUpdateAPIView.as_view(), name='processor_update'),
    path('processors/<slug:slug>/delete', ProcessorDeleteAPIView.as_view(), name='processor_delete'),

    path('supply_types/', SupplyTypeAPIView.as_view(), name='supply_types'),
    path('supply_types/add/', SupplyTypeCreateAPIView.as_view(), name='supply_type_create'),
    path('supply_types/<slug:slug>', SupplyTypeDetailAPIView.as_view(), name='supply_type_detail'),
    path('supply_types/<slug:slug>/update', SupplyTypeUpdateAPIView.as_view(), name='supply_type_update'),
    path('supply_types/<slug:slug>/delete', SupplyTypeDeleteAPIView.as_view(), name='supply_type_delete'),
]
