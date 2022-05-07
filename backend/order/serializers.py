from rest_framework.serializers import ModelSerializer

from order.models import DeliveryAddress


class DeliveryAddressSerializer(ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = '__all__'
