from django.urls import path, include
from rest_framework import routers

from store.views import ProcessorViewSet, SupplyTypeViewSet, SocketViewSet, ChipsetViewSet, RAMTypeViewSet, \
    RAMFrequencyViewSet, RAMGenerationViewSet, RAMWorkingModeViewSet, RAMLatencyViewSet, RAMViewSet

router = routers.SimpleRouter()
router.register(r'processors', ProcessorViewSet)
router.register(r'rams', RAMViewSet)
router.register(r'supplyTypes', SupplyTypeViewSet)
router.register(r'sockets', SocketViewSet)
router.register(r'chipsets', ChipsetViewSet)
router.register(r'RAMTypes', RAMTypeViewSet)
router.register(r'RAMFrequencies', RAMFrequencyViewSet)
router.register(r'RAMGenerations', RAMGenerationViewSet)
router.register(r'RAMWorkingModes', RAMWorkingModeViewSet)
router.register(r'RAMLatencies', RAMLatencyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
