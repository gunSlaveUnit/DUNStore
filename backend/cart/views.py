from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from cart.models import CartRow
from cart.serializers import CartRowSerializer


class CartRowViewSet(ModelViewSet):
    queryset = CartRow.objects.all()
    serializer_class = CartRowSerializer

    def list(self, request, *args, **kwargs):
        token = request.query_params.get("token")
        if token is None:
            return Response("Token not provided")
        queryset = CartRow.objects.filter(token=token)
        serializer = CartRowSerializer(queryset, many=True)
        return Response(serializer.data)
