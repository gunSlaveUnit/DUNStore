from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from store.models import Processor
from store.serializers import ProcessorSerializer


class ProcessorsAPIView(ListAPIView):
    model = Processor
    queryset = Processor.objects.filter(is_published=True)
    context_object_name = 'processors'
    serializer_class = ProcessorSerializer


class ProcessorCreateAPIView(CreateAPIView):
    model = Processor
    serializer_class = ProcessorSerializer


class ProcessorDetailAPIView(RetrieveAPIView):
    model = Processor
    lookup_field = 'slug'
    queryset = Processor.objects.all()
    serializer_class = ProcessorSerializer


class ProcessorUpdateAPIView(UpdateAPIView):
    model = Processor
    serializer_class = ProcessorSerializer
    queryset = Processor.objects.all()
    lookup_field = 'slug'


class ProcessorDeleteAPIView(DestroyAPIView):
    model = Processor
    serializer_class = ProcessorSerializer
    queryset = Processor.objects.all()
    lookup_field = 'slug'
