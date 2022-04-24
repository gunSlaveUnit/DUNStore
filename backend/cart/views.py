from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from cart.models import CartRow
from cart.serializers import CartRowSerializer


class CartRowListAPIView(ListAPIView):
    serializer_class = CartRowSerializer

    def list(self, request, *args, **kwargs):
        token = request.query_params.get("token")
        queryset = CartRow.objects.filter(token=token)
        serializer = CartRowSerializer(queryset, many=True)
        return Response(serializer.data)


class CartRowCreateAPIView(CreateAPIView):
    serializer_class = CartRowSerializer
