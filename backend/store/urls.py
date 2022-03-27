from django.urls import path, include
from rest_framework import routers

from store.views import ProcessorViewSet, SupplyTypeViewSet, SocketViewSet

router = routers.SimpleRouter()
router.register(r'processors', ProcessorViewSet)
router.register(r'supplyTypes', SupplyTypeViewSet)
router.register(r'sockets', SocketViewSet)
router.register(r'chipsets', SocketViewSet)
router.register(r'supportedRAMTypes', SocketViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
