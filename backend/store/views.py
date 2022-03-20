from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from store.models import Processor, SupplyType
from store.serializers import ProcessorSerializer, SupplyTypeSerializer


class ProcessorsAPIView(ListAPIView):
    model = Processor
    queryset = Processor.objects.select_related().filter(is_published=True)
    context_object_name = 'processors'
    serializer_class = ProcessorSerializer


class ProcessorCreateAPIView(CreateAPIView):
    model = Processor
    serializer_class = ProcessorSerializer


class ProcessorDetailAPIView(RetrieveAPIView):
    model = Processor
    lookup_field = 'slug'
    queryset = Processor.objects.select_related().all()
    serializer_class = ProcessorSerializer


class ProcessorUpdateAPIView(UpdateAPIView):
    model = Processor
    serializer_class = ProcessorSerializer
    queryset = Processor.objects.select_related().all()
    lookup_field = 'slug'


class ProcessorDeleteAPIView(DestroyAPIView):
    model = Processor
    serializer_class = ProcessorSerializer
    queryset = Processor.objects.select_related().all()
    lookup_field = 'slug'


class SupplyTypeAPIView(ListAPIView):
    model = SupplyType
    queryset = SupplyType.objects.all()
    context_object_name = 'supply_types'
    serializer_class = SupplyTypeSerializer


class SupplyTypeCreateAPIView(CreateAPIView):
    model = SupplyType
    serializer_class = SupplyTypeSerializer


class SupplyTypeDetailAPIView(RetrieveAPIView):
    model = SupplyType
    lookup_field = 'slug'
    queryset = SupplyType.objects.all()
    serializer_class = SupplyTypeSerializer


class SupplyTypeUpdateAPIView(UpdateAPIView):
    model = SupplyType
    serializer_class = SupplyTypeSerializer
    queryset = SupplyType.objects.all()
    lookup_field = 'slug'


class SupplyTypeDeleteAPIView(DestroyAPIView):
    model = SupplyType
    serializer_class = SupplyTypeSerializer
    queryset = SupplyType.objects.all()
    lookup_field = 'slug'
