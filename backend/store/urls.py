from django.urls import path, include
from rest_framework import routers

from views import ProcessorViewSet, SupplyTypeViewSet, SocketViewSet, ChipsetViewSet, RAMTypeViewSet, \
    RAMFrequencyViewSet, RAMGenerationViewSet, RAMWorkingModeViewSet, RAMLatencyViewSet, RAMViewSet, PowerUnitViewSet

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
router.register(r'powerUnits', PowerUnitViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
