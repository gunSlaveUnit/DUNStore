from django.urls import path, include
from rest_framework import routers

from store.views import VideoCardSerializer, MotherboardSerializer, ProcessorViewSet, RAMViewSet, PowerUnitViewSet

router = routers.SimpleRouter()
router.register(r'video_cards', VideoCardSerializer)
router.register(r'motherboards', MotherboardSerializer)
router.register(r'processors', ProcessorViewSet)
router.register(r'rams', RAMViewSet)
router.register(r'power_units', PowerUnitViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
