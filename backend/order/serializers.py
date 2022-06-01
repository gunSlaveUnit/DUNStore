from rest_framework.exceptions import ValidationError
from rest_framework.serializers import ModelSerializer

from order.models import ObtainWay, Status, DeliveryAddress, OrderItem
from users.models import User
from users.serializers import UserSerializer


class ObtainWaySerializer(ModelSerializer):
    class Meta:
        model = ObtainWay
        fields = '__all__'


class StatusSerializer(ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'


class DeliveryAddressSerializer(ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = '__all__'


class OrderItemSerializer(ModelSerializer):
    user = UserSerializer(read_only=True)
    obtain_method = ObtainWaySerializer(read_only=True)
    address = DeliveryAddressSerializer(read_only=True)
    status = StatusSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = '__all__'

    def to_internal_value(self, data):
        """ Used to validate the update request for your serializer """

        user_id = data.get('user')
        obtain_method_id = data.get('obtain_method')
        address_id = data.get('address')
        status_id = data.get('status')

        internal_data = super().to_internal_value(data)

        try:
            user = User.objects.get(id=user_id)
            obtain_method = ObtainWay.objects.get(id=obtain_method_id)
            address = DeliveryAddress.objects.get(id=address_id)
            status = Status.objects.get(id=status_id)
        except User.DoesNotExist:
            raise ValidationError({'user': ['Item does not exist']})
        except ObtainWay.DoesNotExist:
            raise ValidationError({'obtain_method': ['Item does not exist']})
        except DeliveryAddress.DoesNotExist:
            raise ValidationError({'address': ['Item does not exist']})
        except Status.DoesNotExist:
            raise ValidationError({'status': ['Item does not exist']})

        internal_data['user'] = user
        internal_data['obtain_method'] = obtain_method
        internal_data['address'] = address
        internal_data['status'] = status

        return internal_data
