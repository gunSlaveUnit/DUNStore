from django.urls import reverse_lazy
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView
from rest_framework.generics import ListAPIView

from store.models import Processor
from store.serializers import ProcessorSerializer


class ProcessorsAPIView(ListAPIView):
    model = Processor
    queryset = Processor.objects.filter(is_published=True)
    context_object_name = 'processors'
    serializer_class = ProcessorSerializer


class ProcessorCreate(CreateView):
    model = Processor
    slug_field = 'slug'
    fields = '__all__'
    template_name = 'store/processor_create.html'


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
