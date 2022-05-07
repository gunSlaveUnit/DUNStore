from django.urls import path, include
from rest_framework import routers

from order.views import DeliveryAddressViewSet

router = routers.SimpleRouter()
router.register(r'addresses', DeliveryAddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
