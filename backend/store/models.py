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

    def __str__(self):
        return self.title


class Product(Entity):
    """ Represents the final finished component for sale """
    price = models.IntegerField()


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


class Processor(Product):
    supply_type = models.ForeignKey(SupplyType, on_delete=models.PROTECT)
    cores_amount = models.IntegerField()
    threads_amount = models.IntegerField()
    technological_process = models.IntegerField()
