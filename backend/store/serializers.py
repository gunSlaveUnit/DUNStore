from rest_framework.serializers import ModelSerializer, ValidationError

from models import Processor, SupplyType, Socket, Chipset, RAMType, RAMFrequency, RAMGeneration, RAMWorkingMode, \
    RAMLatency, RAM, PowerUnit, Build, GraphicsCard, Period


class PeriodSerializer(ModelSerializer):
    class Meta:
        model = Period
        fields = '__all__'


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
    warranty_period = PeriodSerializer(read_only=True)

    class Meta:
        model = RAM
        fields = '__all__'

    def to_internal_value(self, data):
        form_factor_id = data.get('form_factor')
        generation_id = data.get('generation')
        mode_id = data.get('mode')
        frequency_id = data.get('frequency')
        latency_id = data.get('latency')
        warranty_period_id = data.get('warranty_period')
        internal_data = super().to_internal_value(data)
        try:
            form_factor = RAMType.objects.get(id=form_factor_id)
            generation = RAMGeneration.objects.get(id=generation_id)
            mode = RAMWorkingMode.objects.get(id=mode_id)
            frequency = RAMFrequency.objects.get(id=frequency_id)
            latency = RAMLatency.objects.get(id=latency_id)
            warranty_period = Period.objects.get(id=warranty_period_id)
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
        except Period.DoesNotExist:
            raise ValidationError(
                {'warranty_period': ['Item does not exist']},
            )
        internal_data['form_factor'] = form_factor
        internal_data['generation'] = generation
        internal_data['mode'] = mode
        internal_data['frequency'] = frequency
        internal_data['latency'] = latency
        internal_data['warranty_period'] = warranty_period

        return internal_data


class ProcessorSerializer(ModelSerializer):
    supply_type = SupplyTypeSerializer(read_only=True)
    socket = SocketSerializer(read_only=True)
    warranty_period = PeriodSerializer(read_only=True)

    class Meta:
        model = Processor
        fields = '__all__'

    def to_internal_value(self, data):
        supply_type_id = data.get('supply_type')
        socket_id = data.get('socket')
        warranty_period_id = data.get('warranty_period')
        internal_data = super().to_internal_value(data)
        try:
            supply_type = SupplyType.objects.get(id=supply_type_id)
            socket = Socket.objects.get(id=socket_id)
            warranty_period = Period.objects.get(id=warranty_period_id)
        except SupplyType.DoesNotExist:
            raise ValidationError(
                {'supply_type': ['Item does not exist']},
            )
        except Socket.DoesNotExist:
            raise ValidationError(
                {'socket': ['Item does not exist']},
            )
        except Period.DoesNotExist:
            raise ValidationError(
                {'warranty_period': ['Item does not exist']},
            )
        internal_data['supply_type'] = supply_type
        internal_data['socket'] = socket
        internal_data['warranty_period'] = warranty_period

        return internal_data


class PowerUnitSerializer(ModelSerializer):
    warranty_period = PeriodSerializer(read_only=True)

    class Meta:
        model = PowerUnit
        fields = '__all__'

    def to_internal_value(self, data):
        warranty_period_id = data.get('warranty_period')
        internal_data = super().to_internal_value(data)
        try:
            warranty_period = Period.objects.get(id=warranty_period_id)
        except Period.DoesNotExist:
            raise ValidationError(
                {'warranty_period': ['Item does not exist']},
            )
        internal_data['warranty_period'] = warranty_period

        return internal_data


class GraphicsCardSerializer(ModelSerializer):
    warranty_period = PeriodSerializer(read_only=True)

    class Meta:
        model = GraphicsCard
        fields = '__all__'

    def to_internal_value(self, data):
        warranty_period_id = data.get('warranty_period')
        internal_data = super().to_internal_value(data)
        try:
            warranty_period = Period.objects.get(id=warranty_period_id)
        except Period.DoesNotExist:
            raise ValidationError(
                {'warranty_period': ['Item does not exist']},
            )
        internal_data['warranty_period'] = warranty_period

        return internal_data


class BuildSerializer(ModelSerializer):
    processor = ProcessorSerializer(read_only=True)
    ram_module = RAMSerializer(read_only=True)
    power_unit = PowerUnitSerializer(read_only=True)
    warranty_period = PeriodSerializer(read_only=True)

    class Meta:
        model = Build
        fields = '__all__'

    def to_internal_value(self, data):
        processor_id = data.get('processor')
        ram_module_id = data.get('ram_module')
        power_unit_id = data.get('power_unit')
        warranty_period_id = data.get('warranty_period')
        internal_data = super().to_internal_value(data)
        try:
            processor = Processor.objects.get(id=processor_id)
            ram_module = RAM.objects.get(id=ram_module_id)
            power_unit = PowerUnit.objects.get(id=power_unit_id)
            warranty_period = Period.objects.get(id=warranty_period_id)
        except Processor.DoesNotExist:
            raise ValidationError(
                {'processor': ['Item does not exist']},
            )
        except Period.DoesNotExist:
            raise ValidationError(
                {'warranty_period': ['Item does not exist']},
            )
        except RAM.DoesNotExist:
            raise ValidationError(
                {'ram_module': ['Item does not exist']},
            )
        except PowerUnit.DoesNotExist:
            raise ValidationError(
                {'power_unit': ['Item does not exist']},
            )
        internal_data['processor'] = processor
        internal_data['ram_module'] = ram_module
        internal_data['power_unit'] = power_unit
        internal_data['warranty_period'] = warranty_period

        return internal_data
