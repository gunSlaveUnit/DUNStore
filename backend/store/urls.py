from django.urls import path, include
from rest_framework import routers

from store.views import ProcessorViewSet, SupplyTypeViewSet, SocketViewSet

router = routers.SimpleRouter()
router.register(r'processor', ProcessorViewSet)
router.register(r'supplyType', SupplyTypeViewSet)
router.register(r'socket', SocketViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
