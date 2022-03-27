from rest_framework.viewsets import ModelViewSet

from store.models import Processor, SupplyType, Socket, Chipset, RAMType
from store.serializers import ProcessorSerializer, SupplyTypeSerializer, SocketSerializer, ChipsetSerializer, \
    RAMTypeSerializer


class ProcessorViewSet(ModelViewSet):
    queryset = Processor.objects.filter(is_published=True)
    serializer_class = ProcessorSerializer
    lookup_field = 'slug'


class SupplyTypeViewSet(ModelViewSet):
    queryset = SupplyType.objects.all()
    serializer_class = SupplyTypeSerializer
    lookup_field = 'slug'


class SocketViewSet(ModelViewSet):
    queryset = Socket.objects.all()
    serializer_class = SocketSerializer
    lookup_field = 'slug'


class ChipsetViewSet(ModelViewSet):
    queryset = Chipset.objects.all()
    serializer_class = ChipsetSerializer
    lookup_field = 'slug'


class SupportedRAMTypeViewSet(ModelViewSet):
    queryset = RAMType.objects.all()
    serializer_class = RAMTypeSerializer
    lookup_field = 'slug'
