from abc import ABCMeta

from django.db import models


class Entity(models.Model):
    """ Represents a "string" base entity.
    Needed to represent a name for selection anywhere """

    __metaclass__ = ABCMeta
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=100, unique=True)
    is_published = models.BooleanField(default=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Product(Entity):
    """ Represents the final finished component for sale """

    __metaclass__ = ABCMeta
    price = models.IntegerField()
    weight = models.FloatField()

    class Meta:
        abstract = True


class SupplyType(Entity):
    pass


class Socket(Entity):
    pass


class Chipset(Entity):
    pass


class RAMType(Entity):
    pass


class RAMFrequency(Entity):
    pass


class RAMGeneration(Entity):
    pass


class RAMWorkingMode(Entity):
    pass


class RAMLatency(Entity):
    pass


class RAM(Entity):
    """ Represents one RAM module """

    form_factor = models.ForeignKey(RAMType, on_delete=models.PROTECT)
    generation = models.ForeignKey(RAMGeneration, on_delete=models.PROTECT)
    mode = models.ForeignKey(RAMWorkingMode, on_delete=models.PROTECT)
    frequency = models.ForeignKey(RAMFrequency, on_delete=models.PROTECT)
    latency = models.ForeignKey(RAMLatency, on_delete=models.PROTECT)
    capacity = models.IntegerField()


class Processor(Product):
    supply_type = models.ForeignKey(SupplyType, on_delete=models.PROTECT)
    socket = models.ForeignKey(Socket, on_delete=models.PROTECT)
    cores_amount = models.IntegerField()
    threads_amount = models.IntegerField()
    technological_process = models.IntegerField()


class PowerUnit(Product):
    power = models.IntegerField()


class Build(Product):
    processor = models.ForeignKey(Processor, on_delete=models.PROTECT)
    ram_module = models.ForeignKey(RAM, on_delete=models.PROTECT)
    power_unit = models.ForeignKey(PowerUnit, on_delete=models.PROTECT)


class GraphicsCard(Product):
    gpu_frequency = models.IntegerField()
    video_memory_frequency = models.IntegerField()
    technological_process = models.IntegerField()
