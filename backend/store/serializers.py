from rest_framework.serializers import ModelSerializer, ValidationError

from store.models import Processor, SupplyType, Socket, Chipset, RAMType, RAMFrequency, RAMGeneration


class SupplyTypeSerializer(ModelSerializer):
    class Meta:
        model = SupplyType
        fields = '__all__'


class SocketSerializer(ModelSerializer):
    class Meta:
        model = Socket
        fields = '__all__'


class ChipsetSerializer(ModelSerializer):
    class Meta:
        model = Chipset
        fields = '__all__'


class RAMTypeSerializer(ModelSerializer):
    class Meta:
        model = RAMType
        fields = '__all__'


class RAMFrequencySerializer(ModelSerializer):
    class Meta:
        model = RAMFrequency
        fields = '__all__'


class RAMGenerationSerializer(ModelSerializer):
    class Meta:
        model = RAMGeneration
        fields = '__all__'


class ProcessorSerializer(ModelSerializer):
    supply_type = SupplyTypeSerializer(read_only=True)

    class Meta:
        model = Processor
        fields = '__all__'

    def to_internal_value(self, data):
        supply_type_id = data.get('supply_type')
        internal_data = super().to_internal_value(data)
        try:
            supply_type = SupplyType.objects.get(id=supply_type_id)
        except SupplyType.DoesNotExist:
            raise ValidationError(
                {'supply_type': ['Item does not exist']},
            )
        internal_data['supply_type'] = supply_type
        return internal_data
