from django.urls import path, include
from rest_framework import routers

from order.views import DeliveryAddressViewSet, payment

router = routers.SimpleRouter()
router.register(r'addresses', DeliveryAddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('payment/', payment)
]
