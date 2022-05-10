from rest_framework.serializers import ModelSerializer

from cart.models import CartRow


class CartRowSerializer(ModelSerializer):
    class Meta:
        model = CartRow
        fields = '__all__'
