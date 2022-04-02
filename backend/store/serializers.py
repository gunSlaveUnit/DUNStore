from rest_framework.exceptions import ValidationError
from rest_framework.serializers import ModelSerializer

from store.models import Category, Build, StorageDevice, VideoCard, Motherboard, Processor, RAM, PowerUnit


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class StorageDeviceSerializer(ModelSerializer):
    class Meta:
        model = StorageDevice
        fields = '__all__'


class VideoCardSerializer(ModelSerializer):
    class Meta:
        model = VideoCard
        fields = '__all__'


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


class BuildSerializer(ModelSerializer):
    motherboard = MotherboardSerializer(read_only=True)
    processor = ProcessorSerializer(read_only=True)
    video_card = VideoCardSerializer(read_only=True)
    power_unit = PowerUnitSerializer(read_only=True)
    ram = RAMSerializer(read_only=True)
    storage_device = StorageDeviceSerializer(read_only=True)

    class Meta:
        model = Build
        fields = '__all__'

    def to_internal_value(self, data):
        motherboard_id = data.get('motherboard')
        processor_id = data.get('processor')
        video_card_id = data.get('video_card')
        power_unit_id = data.get('power_unit')
        ram_id = data.get('ram')
        storage_device_id = data.get('storage_device')

        internal_data = super().to_internal_value(data)

        try:
            motherboard = Motherboard.objects.get(id=motherboard_id)
            processor = Processor.objects.get(id=processor_id)
            video_card = VideoCard.objects.get(id=video_card_id)
            power_unit = PowerUnit.objects.get(id=power_unit_id)
            ram = RAM.objects.get(id=ram_id)
            storage_device = StorageDevice.objects.get(id=storage_device_id)
        except Motherboard.DoesNotExist:
            raise ValidationError({'motherboard': ['Item does not exist']})
        except Processor.DoesNotExist:
            raise ValidationError({'processor': ['Item does not exist']})
        except VideoCard.DoesNotExist:
            raise ValidationError({'video_card': ['Item does not exist']})
        except PowerUnit.DoesNotExist:
            raise ValidationError({'power_unit': ['Item does not exist']})
        except RAM.DoesNotExist:
            raise ValidationError({'ram': ['Item does not exist']})
        except StorageDevice.DoesNotExist:
            raise ValidationError({'storage_device': ['Item does not exist']})

        internal_data['motherboard'] = motherboard
        internal_data['processor'] = processor
        internal_data['video_card'] = video_card
        internal_data['power_unit'] = power_unit
        internal_data['ram'] = ram
        internal_data['storage_device'] = storage_device

        return internal_data
