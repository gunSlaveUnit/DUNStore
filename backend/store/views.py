from rest_framework.viewsets import ModelViewSet

from store.models import Processor, SupplyType, Socket, Chipset, RAMType, RAMFrequency, RAMGeneration, RAMWorkingMode, \
    RAMLatency, RAM, PowerUnit
from store.serializers import ProcessorSerializer, SupplyTypeSerializer, SocketSerializer, ChipsetSerializer, \
    RAMTypeSerializer, RAMFrequencySerializer, RAMGenerationSerializer, RAMWorkingModeSerializer, RAMLatencySerializer, \
    RAMSerializer, PowerUnitSerializer


class ProcessorViewSet(ModelViewSet):
    queryset = Processor.objects.filter(is_published=True)
    serializer_class = ProcessorSerializer
    lookup_field = 'slug'


class RAMViewSet(ModelViewSet):
    queryset = RAM.objects.filter(is_published=True)
    serializer_class = RAMSerializer
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


class RAMTypeViewSet(ModelViewSet):
    queryset = RAMType.objects.all()
    serializer_class = RAMTypeSerializer
    lookup_field = 'slug'


class RAMFrequencyViewSet(ModelViewSet):
    queryset = RAMFrequency.objects.all()
    serializer_class = RAMFrequencySerializer
    lookup_field = 'slug'


class RAMGenerationViewSet(ModelViewSet):
    queryset = RAMGeneration.objects.all()
    serializer_class = RAMGenerationSerializer
    lookup_field = 'slug'


class RAMWorkingModeViewSet(ModelViewSet):
    queryset = RAMWorkingMode.objects.all()
    serializer_class = RAMWorkingModeSerializer
    lookup_field = 'slug'


class RAMLatencyViewSet(ModelViewSet):
    queryset = RAMLatency.objects.all()
    serializer_class = RAMLatencySerializer
    lookup_field = 'slug'


class PowerUnitViewSet(ModelViewSet):
    queryset = PowerUnit.objects.all()
    serializer_class = PowerUnitSerializer
    lookup_field = 'slug'
