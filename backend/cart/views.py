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

    def create(self, request, *args, **kwargs):
        auth_header = request.headers.get("Authorization")
        token = auth_header[auth_header.find(" ")+1:]

        if token is None:
            return Response("Token not provided")

        new_data = request.data
        try:
            queryset = CartRow.objects.get(token=token, category=new_data["category"], slug=new_data["slug"])

            queryset.amount += new_data["amount"]
            queryset.save()
            serializer = CartRowSerializer(queryset, many=False)

            return Response(serializer.data)
        except CartRow.DoesNotExist:
            new = CartRow.objects.create(token=new_data["token"],
                                         category=new_data["category"],
                                         slug=new_data["slug"],
                                         amount=new_data["amount"])
            new.save()
            serializer = CartRowSerializer(new, many=False)

            return Response(serializer.data)
