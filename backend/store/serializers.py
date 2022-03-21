from rest_framework.serializers import ModelSerializer

from store.models import Processor, SupplyType


class SupplyTypeSerializer(ModelSerializer):
    class Meta:
        model = SupplyType
        fields = ('id', 'title', 'slug')


class ProcessorSerializer(ModelSerializer):
    supply_type = SupplyTypeSerializer(read_only=True)

    class Meta:
        model = Processor
        fields = '__all__'
