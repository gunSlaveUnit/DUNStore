from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import MultiPartParser, JSONParser, FormParser

from store.models import Category, Build, StorageDevice, VideoCard, Motherboard, Processor, RAM, PowerUnit
from store.serializers import CategorySerializer, BuildSerializer, StorageDeviceSerializer, VideoCardSerializer, \
    MotherboardSerializer, ProcessorSerializer, RAMSerializer, PowerUnitSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
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


class BuildViewSet(ModelViewSet):
    queryset = Build.objects.filter(is_published=True)
    serializer_class = BuildSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class StorageDeviceViewSet(ModelViewSet):
    queryset = StorageDevice.objects.filter(is_published=True)
    serializer_class = StorageDeviceSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class VideoCardViewSet(ModelViewSet):
    queryset = VideoCard.objects.filter(is_published=True)
    serializer_class = VideoCardSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class MotherboardViewSet(ModelViewSet):
    queryset = Motherboard.objects.filter(is_published=True)
    serializer_class = MotherboardSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class ProcessorViewSet(ModelViewSet):
    queryset = Processor.objects.filter(is_published=True)
    serializer_class = ProcessorSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class RAMViewSet(ModelViewSet):
    queryset = RAM.objects.filter(is_published=True)
    serializer_class = RAMSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class PowerUnitViewSet(ModelViewSet):
    queryset = PowerUnit.objects.filter(is_published=True)
    serializer_class = PowerUnitSerializer
    lookup_field = 'slug'
    parser_classes = [MultiPartParser, JSONParser]

    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
            """
        if self.action in ('list', 'retrieve'):
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
