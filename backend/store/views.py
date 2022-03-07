from django.urls import reverse_lazy
from django.views.generic import DetailView, UpdateView, DeleteView
from rest_framework.generics import ListAPIView, CreateAPIView

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


class ProcessorDetail(DetailView):
    model = Processor
    slug_field = 'slug'
    context_object_name = 'processor'


class ProcessorUpdate(UpdateView):
    model = Processor
    fields = '__all__'
    template_name = 'store/processor_create.html'


class ProcessorDelete(DeleteView):
    model = Processor
    fields = '__all__'
    context_object_name = 'processor'
    success_url = reverse_lazy('processors')
