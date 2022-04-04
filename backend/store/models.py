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

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=100, null=False)
    slug = models.SlugField(max_length=100, unique=True)


class Processor(Product):
    supply_type = models.CharField(max_length=10)
    socket = models.CharField(max_length=20)
    cores_amount = models.IntegerField()
    threads_amount = models.IntegerField()
    technological_process = models.IntegerField()


class RAM(Product):
    """ Represents one RAM module """

    form_factor = models.CharField(max_length=10)
    generation = models.CharField(max_length=10)
    mode = models.CharField(max_length=30)
    frequency = models.CharField(max_length=10)
    latency = models.CharField(max_length=10)
    capacity = models.CharField(max_length=10)


class PowerUnit(Product):
    power = models.IntegerField()


class Motherboard(Product):
    socket = models.CharField(max_length=20)
    ram_generation = models.CharField(max_length=10)
    ram_type = models.CharField(max_length=10)
    ram_slots_amount = models.IntegerField()


class VideoCard(Product):
    gpu_frequency = models.IntegerField()
    video_memory_size = models.IntegerField()
    video_memory_generation = models.CharField(max_length=10)
    video_memory_frequency = models.IntegerField()


class StorageDevice(Product):
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
