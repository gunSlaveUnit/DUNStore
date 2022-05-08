from django.urls import path, include
from rest_framework import routers

from order.views import ObtainWayViewSet, StatusViewSet, DeliveryAddressViewSet, payment

router = routers.SimpleRouter()
router.register(r'obtain-ways', ObtainWayViewSet)
router.register(r'statuses', StatusViewSet)
router.register(r'addresses', DeliveryAddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('payment/', payment)
]
