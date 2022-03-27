from django.urls import path, include
from rest_framework import routers

from store.views import ProcessorViewSet, SupplyTypeViewSet, SocketViewSet, ChipsetViewSet, RAMTypeViewSet

router = routers.SimpleRouter()
router.register(r'processors', ProcessorViewSet)
router.register(r'supplyTypes', SupplyTypeViewSet)
router.register(r'sockets', SocketViewSet)
router.register(r'chipsets', ChipsetViewSet)
router.register(r'RAMTypes', RAMTypeViewSet)
router.register(r'RAMFrequencies', RAMTypeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
