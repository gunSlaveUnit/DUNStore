from django.urls import path, include
from rest_framework import routers

from store.views import BuildViewSet, \
    StorageDeviceViewSet, VideoCardViewSet, MotherboardViewSet, ProcessorViewSet, RAMViewSet, PowerUnitViewSet

router = routers.SimpleRouter()

router.register(r'processors', ProcessorViewSet)
router.register(r'rams', RAMViewSet)
router.register(r'power_units', PowerUnitViewSet)
router.register(r'motherboards', MotherboardViewSet)
router.register(r'video_cards', VideoCardViewSet)
router.register(r'storage_devices', StorageDeviceViewSet)
router.register(r'builds', BuildViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
