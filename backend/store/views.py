from rest_framework.viewsets import ModelViewSet

from store.models import Processor, RAM, PowerUnit
from store.serializers import ProcessorSerializer, RAMSerializer, PowerUnitSerializer


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
