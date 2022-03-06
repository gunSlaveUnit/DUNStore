from django.views.generic import ListView, CreateView

from store.models import Processor


class Processors(ListView):
    model = Processor
    queryset = Processor.objects.filter(is_published=True)
    context_object_name = 'processors'


class ProcessorCreate(CreateView):
    model = Processor
    fields = ('title', 'price', 'is_published', 'cores_amount', 'threads_amount', 'technological_process')
    template_name = 'store/processor_create.html'
