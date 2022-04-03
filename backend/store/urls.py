from django.urls import path, include
from rest_framework import routers

from store.views import CategoryViewSet, BuildViewSet, \
    StorageDeviceViewSet, VideoCardViewSet, MotherboardViewSet, ProcessorViewSet, RAMViewSet, PowerUnitViewSet

router = routers.SimpleRouter()

router.register(r'categories', CategoryViewSet)
router.register(r'processors', ProcessorViewSet)
router.register(r'rams', RAMViewSet)
router.register(r'power-units', PowerUnitViewSet)
router.register(r'motherboards', MotherboardViewSet)
router.register(r'video-cards', VideoCardViewSet)
router.register(r'storage-devices', StorageDeviceViewSet)
router.register(r'builds', BuildViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
