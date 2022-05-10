from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from order.models import ObtainWay, Status, DeliveryAddress, OrderItem
from order.serializers import ObtainWaySerializer, StatusSerializer, DeliveryAddressSerializer, OrderItemSerializer
from order.services import make_payment


class ObtainWayViewSet(ModelViewSet):
    queryset = ObtainWay.objects.all()
    serializer_class = ObtainWaySerializer

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action == "retrieve":
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class StatusViewSet(ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action == "retrieve":
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class DeliveryAddressViewSet(ModelViewSet):
    queryset = DeliveryAddress.objects.all()
    serializer_class = DeliveryAddressSerializer

    def list(self, request, *args, **kwargs):
        auth_header = request.headers.get("Authorization")
        token = auth_header[auth_header.find(" "):]

        if token is None:
            return Response("Token not provided")

        queryset = DeliveryAddress.objects.filter(is_store=True)
        serializer = DeliveryAddressSerializer(queryset, many=True)

        return Response(serializer.data)

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ("create", "retrieve", "list"):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class OrderViewSet(ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def list(self, request, *args, **kwargs):
        auth_header = request.headers.get("Authorization")
        token = auth_header[auth_header.find(" "):]

        if token is None:
            return Response("Token not provided")
        queryset = OrderItem.objects.all()
        serializer = OrderItemSerializer(queryset, many=True)

        return Response(serializer.data)

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ("list", 'retrieve', "create"):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def payment(request):
    payment_data = request.data
    if not payment_data:
        return Response(data={"data": "Payment info not provided"}, status=status.HTTP_400_BAD_REQUEST)

    pay_result = make_payment(payment_data)
    return Response(data={"message": pay_result["message"]}, status=pay_result["status"])
