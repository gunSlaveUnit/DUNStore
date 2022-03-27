from rest_framework.viewsets import ModelViewSet

from store.models import Processor, SupplyType, Socket
from store.serializers import ProcessorSerializer, SupplyTypeSerializer, SocketSerializer


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
