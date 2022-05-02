from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response

from cart.models import CartRow
from cart.serializers import CartRowSerializer


class CartRowListAPIView(ListAPIView):
    serializer_class = CartRowSerializer

    def list(self, request, *args, **kwargs):
        email = request.query_params.get("email")
        queryset = CartRow.objects.filter(email=email)
        serializer = CartRowSerializer(queryset, many=True)
        return Response(serializer.data)


class CartRowCreateAPIView(CreateAPIView):
    serializer_class = CartRowSerializer
