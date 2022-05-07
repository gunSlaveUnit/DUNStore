from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.viewsets import ModelViewSet

from order.models import DeliveryAddress
from order.serializers import DeliveryAddressSerializer


class DeliveryAddressViewSet(ModelViewSet):
    queryset = DeliveryAddress.objects.all()
    serializer_class = DeliveryAddressSerializer
    lookup_field = 'slug'

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
