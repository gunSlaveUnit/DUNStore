from rest_framework.serializers import ModelSerializer

from store.models import Motherboard, Processor, RAM, PowerUnit


class MotherboardSerializer(ModelSerializer):
    class Meta:
        model = Motherboard
        fields = '__all__'


class RAMSerializer(ModelSerializer):
    class Meta:
        model = RAM
        fields = '__all__'


class ProcessorSerializer(ModelSerializer):
    class Meta:
        model = Processor
        fields = '__all__'


class PowerUnitSerializer(ModelSerializer):
    class Meta:
        model = PowerUnit
        fields = '__all__'
