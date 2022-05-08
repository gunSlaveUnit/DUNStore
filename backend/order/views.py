from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from order.models import ObtainWay, DeliveryAddress
from order.serializers import ObtainWaySerializer, DeliveryAddressSerializer
from order.services import make_payment


class ObtainWayViewSet(ModelViewSet):
    queryset = ObtainWay.objects.all()
    serializer_class = ObtainWaySerializer

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action == "retrieve":
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class DeliveryAddressViewSet(ModelViewSet):
    queryset = DeliveryAddress.objects.all()
    serializer_class = DeliveryAddressSerializer

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ("create", "retrieve"):
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
