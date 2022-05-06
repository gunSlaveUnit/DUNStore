from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from store.models import Category, Build, StorageDevice, VideoCard, Motherboard, Processor, RAM, PowerUnit
from store.serializers import CategorySerializer, BuildSerializer, StorageDeviceSerializer, VideoCardSerializer, MotherboardSerializer, ProcessorSerializer, RAMSerializer, PowerUnitSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'


class BuildViewSet(ModelViewSet):
    queryset = Build.objects.filter(is_published=True)
    serializer_class = BuildSerializer
    lookup_field = 'slug'


class StorageDeviceViewSet(ModelViewSet):
    queryset = StorageDevice.objects.filter(is_published=True)
    serializer_class = StorageDeviceSerializer
    lookup_field = 'slug'


class VideoCardViewSet(ModelViewSet):
    queryset = VideoCard.objects.filter(is_published=True)
    serializer_class = VideoCardSerializer
    lookup_field = 'slug'


class MotherboardViewSet(ModelViewSet):
    queryset = Motherboard.objects.filter(is_published=True)
    serializer_class = MotherboardSerializer
    lookup_field = 'slug'


class ProcessorViewSet(ModelViewSet):
    queryset = Processor.objects.filter(is_published=True)
    serializer_class = ProcessorSerializer
    lookup_field = 'slug'


class RAMViewSet(ModelViewSet):
    queryset = RAM.objects.filter(is_published=True)
    serializer_class = RAMSerializer
    lookup_field = 'slug'


class PowerUnitViewSet(ModelViewSet):
    queryset = PowerUnit.objects.filter(is_published=True)
    serializer_class = PowerUnitSerializer
    lookup_field = 'slug'
