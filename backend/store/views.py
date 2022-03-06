from django.views.generic import ListView, CreateView, DetailView

from store.models import Processor


class Processors(ListView):
    model = Processor
    queryset = Processor.objects.filter(is_published=True)
    context_object_name = 'processors'


class ProcessorCreate(CreateView):
    model = Processor
    slug_field = 'slug'
    fields = '__all__'
    template_name = 'store/processor_create.html'


class ProcessorDetail(DetailView):
    model = Processor
    slug_field = 'slug'
    context_object_name = 'processor'
