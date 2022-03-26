from django.urls import path

from store.views import ProcessorViewSet, SupplyTypeViewSet

urlpatterns = [
    path('processors/', ProcessorViewSet.as_view({'get': 'list'}), name='processors'),
    # path('processors/add/', ProcessorViewSet.as_view(), name='processor_create'),
    # path('processors/<slug:slug>', ProcessorViewSet.as_view(), name='processor_detail'),
    # path('processors/<slug:slug>/update', ProcessorViewSet.as_view(), name='processor_update'),
    # path('processors/<slug:slug>/delete', ProcessorViewSet.as_view(), name='processor_delete'),
    #
    # path('supply_types/', SupplyTypeViewSet.as_view(), name='supply_types'),
    # path('supply_types/add/', SupplyTypeViewSet.as_view(), name='supply_type_create'),
    # path('supply_types/<slug:slug>/', SupplyTypeViewSet.as_view(), name='supply_type_detail'),
    # path('supply_types/<slug:slug>/update/', SupplyTypeViewSet.as_view(), name='supply_type_update'),
    # path('supply_types/<slug:slug>/delete/', SupplyTypeViewSet.as_view(), name='supply_type_delete'),
]
