from django.urls import path, include
from rest_framework import routers

from views import ProcessorViewSet, SupplyTypeViewSet, SocketViewSet, ChipsetViewSet, RAMTypeViewSet, \
    RAMFrequencyViewSet, RAMGenerationViewSet, RAMWorkingModeViewSet, RAMLatencyViewSet, RAMViewSet, PowerUnitViewSet, \
    BuildSerializer, GraphicsCardSerializer, PeriodSerializer

router = routers.SimpleRouter()
router.register(r'processors', ProcessorViewSet)
router.register(r'rams', RAMViewSet)
router.register(r'supply_types', SupplyTypeViewSet)
router.register(r'sockets', SocketViewSet)
router.register(r'chipsets', ChipsetViewSet)
router.register(r'ram_types', RAMTypeViewSet)
router.register(r'ram_frequencies', RAMFrequencyViewSet)
router.register(r'ram_generations', RAMGenerationViewSet)
router.register(r'ram_working_modes', RAMWorkingModeViewSet)
router.register(r'ram_latencies', RAMLatencyViewSet)
router.register(r'power_units', PowerUnitViewSet)
router.register(r'builds', BuildSerializer)
router.register(r'graphics_cards', GraphicsCardSerializer)
router.register(r'periods', GraphicsCardSerializer)

urlpatterns = [
    path('', include(router.urls)),
]
