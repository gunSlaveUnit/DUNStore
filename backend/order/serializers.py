from rest_framework.serializers import ModelSerializer

from order.models import ObtainWay, DeliveryAddress


class ObtainWaySerializer(ModelSerializer):
    class Meta:
        model = ObtainWay
        fields = '__all__'


class DeliveryAddressSerializer(ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = '__all__'
