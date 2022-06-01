from abc import ABCMeta

from django.db import models


class Product(models.Model):
    """ Represents the final finished component for sale """

    __metaclass__ = ABCMeta
    title = models.CharField(max_length=100, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    weight = models.FloatField()
    warranty = models.CharField(max_length=20)
    is_published = models.BooleanField(default=True)
    image = models.ImageField(upload_to='products/')

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Category(models.Model):
    """ Describes a group of products according to their
    purpose for the computer: processors, motherboards, etc. """

    title = models.CharField(max_length=100, null=False)
    slug = models.SlugField(max_length=100, unique=True)
    image = models.ImageField(upload_to='categories/')


class Processor(Product):
    """ Represents the central processing unit """
    supply_type = models.CharField(max_length=10)
    socket = models.CharField(max_length=20)
    cores_amount = models.IntegerField()
    threads_amount = models.IntegerField()
    technological_process = models.IntegerField()


class RAM(Product):
    """ Represents one random access memory module """

    form_factor = models.CharField(max_length=10)
    generation = models.CharField(max_length=10)
    mode = models.CharField(max_length=30)
    frequency = models.CharField(max_length=10)
    latency = models.CharField(max_length=10)
    capacity = models.CharField(max_length=10)


class PowerUnit(Product):
    """ Represents the power supply """

    power = models.IntegerField()


class Motherboard(Product):
    """ Represents the motherboard into
    which all other components are connected """

    socket = models.CharField(max_length=20)
    ram_generation = models.CharField(max_length=10)
    ram_type = models.CharField(max_length=10)
    ram_slots_amount = models.IntegerField()


class VideoCard(Product):
    """ Represents a graphics device """

    gpu_frequency = models.IntegerField()
    video_memory_size = models.IntegerField()
    video_memory_generation = models.CharField(max_length=10)
    video_memory_frequency = models.IntegerField()


class StorageDevice(Product):
    """ Represents a storage device,
    such as a hard drive or ssd """

    type = models.CharField(max_length=10)
    capacity = models.IntegerField()
    form_factor = models.CharField(max_length=10)
    interface = models.CharField(max_length=10)


class Build(Product):

    description = models.TextField()
    motherboard = models.ForeignKey(Motherboard, models.DO_NOTHING)
    processor = models.ForeignKey(Processor, models.DO_NOTHING)
    video_card = models.ForeignKey(VideoCard, models.DO_NOTHING)
    power_unit = models.ForeignKey(PowerUnit, models.DO_NOTHING)
    ram = models.ForeignKey(RAM, models.DO_NOTHING)
    storage_device = models.ForeignKey(StorageDevice, models.DO_NOTHING)
