from django.urls import path, include
from rest_framework import routers

from store.views import BuildSerializer, \
    StorageDeviceSerializer, VideoCardSerializer, MotherboardSerializer, ProcessorViewSet, RAMViewSet, PowerUnitViewSet

router = routers.SimpleRouter()

router.register(r'processors', ProcessorViewSet)
router.register(r'rams', RAMViewSet)
router.register(r'power_units', PowerUnitViewSet)
router.register(r'motherboards', MotherboardSerializer)
router.register(r'video_cards', VideoCardSerializer)
router.register(r'storage_devices', StorageDeviceSerializer)
router.register(r'builds', BuildSerializer)

urlpatterns = [
    path('', include(router.urls)),
]
