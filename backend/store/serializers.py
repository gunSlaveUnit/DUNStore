from rest_framework.serializers import ModelSerializer

from store.models import Processor


class ProcessorSerializer(ModelSerializer):
    class Meta:
        model = Processor
        fields = '__all__'
