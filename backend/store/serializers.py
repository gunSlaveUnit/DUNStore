from rest_framework.serializers import ModelSerializer, ValidationError

from models import Processor, SupplyType, Socket, Chipset, RAMType, RAMFrequency, RAMGeneration, RAMWorkingMode, \
    RAMLatency, RAM, PowerUnit


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


class RAMWorkingModeSerializer(ModelSerializer):
    class Meta:
        model = RAMWorkingMode
        fields = '__all__'


class RAMLatencySerializer(ModelSerializer):
    class Meta:
        model = RAMLatency
        fields = '__all__'


class RAMSerializer(ModelSerializer):
    form_factor = RAMTypeSerializer(read_only=True)
    generation = RAMGenerationSerializer(read_only=True)
    mode = RAMWorkingModeSerializer(read_only=True)
    frequency = RAMFrequencySerializer(read_only=True)
    latency = RAMLatencySerializer(read_only=True)

    class Meta:
        model = RAM
        fields = '__all__'

    def to_internal_value(self, data):
        form_factor_id = data.get('form_factor')
        generation_id = data.get('generation')
        mode_id = data.get('mode')
        frequency_id = data.get('frequency')
        latency_id = data.get('latency')
        internal_data = super().to_internal_value(data)
        try:
            form_factor = RAMType.objects.get(id=form_factor_id)
            generation = RAMGeneration.objects.get(id=generation_id)
            mode = RAMWorkingMode.objects.get(id=mode_id)
            frequency = RAMFrequency.objects.get(id=frequency_id)
            latency = RAMLatency.objects.get(id=latency_id)
        except RAMType.DoesNotExist:
            raise ValidationError(
                {'form_factor': ['Item does not exist']},
            )
        except RAMGeneration.DoesNotExist:
            raise ValidationError(
                {'generation': ['Item does not exist']},
            )
        except RAMWorkingMode.DoesNotExist:
            raise ValidationError(
                {'mode': ['Item does not exist']},
            )
        except RAMFrequency.DoesNotExist:
            raise ValidationError(
                {'frequency': ['Item does not exist']},
            )
        except RAMLatency.DoesNotExist:
            raise ValidationError(
                {'latency': ['Item does not exist']},
            )
        internal_data['form_factor'] = form_factor
        internal_data['generation'] = generation
        internal_data['mode'] = mode
        internal_data['frequency'] = frequency
        internal_data['latency'] = latency
        return internal_data


class ProcessorSerializer(ModelSerializer):
    supply_type = SupplyTypeSerializer(read_only=True)
    socket = SocketSerializer(read_only=True)

    class Meta:
        model = Processor
        fields = '__all__'

    def to_internal_value(self, data):
        supply_type_id = data.get('supply_type')
        socket_id = data.get('socket')
        internal_data = super().to_internal_value(data)
        try:
            supply_type = SupplyType.objects.get(id=supply_type_id)
            socket = Socket.objects.get(id=socket_id)
        except SupplyType.DoesNotExist:
            raise ValidationError(
                {'supply_type': ['Item does not exist']},
            )
        except Socket.DoesNotExist:
            raise ValidationError(
                {'socket': ['Item does not exist']},
            )
        internal_data['supply_type'] = supply_type
        internal_data['socket'] = socket
        return internal_data


class PowerUnitSerializer(ModelSerializer):
    class Meta:
        model = PowerUnit
        fields = '__all__'
