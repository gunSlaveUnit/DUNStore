from rest_framework.serializers import ModelSerializer

from order.models import ObtainWay, Status, DeliveryAddress


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
