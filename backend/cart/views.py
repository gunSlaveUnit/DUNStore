from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from cart.models import CartRow
from cart.serializers import CartRowSerializer


class CartRowViewSet(ModelViewSet):
    queryset = CartRow.objects.all()
    serializer_class = CartRowSerializer

    def list(self, request, *args, **kwargs):
        email = request.query_params.get("email")
        queryset = CartRow.objects.filter(email=email)
        serializer = CartRowSerializer(queryset, many=True)
        return Response(serializer.data)
