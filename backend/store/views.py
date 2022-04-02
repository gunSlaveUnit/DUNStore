from rest_framework.viewsets import ModelViewSet

from store.models import VideoCard, Motherboard, Processor, RAM, PowerUnit
from store.serializers import VideoCardSerializer, MotherboardSerializer, ProcessorSerializer, RAMSerializer, PowerUnitSerializer


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
