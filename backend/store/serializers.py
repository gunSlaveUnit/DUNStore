from rest_framework.serializers import ModelSerializer

from store.models import Processor, SupplyType


class ProcessorSerializer(ModelSerializer):
    class Meta:
        model = Processor
        fields = '__all__'


class SupplyTypeSerializer(ModelSerializer):
    class Meta:
        model = SupplyType
        fields = '__all__'
