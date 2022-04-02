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

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Product(Entity):
    """ Represents the final finished component for sale """

    __metaclass__ = ABCMeta
    price = models.IntegerField()
    weight = models.FloatField()
    warranty = models.CharField(max_length=20)
    is_published = models.BooleanField(default=True)

    class Meta:
        abstract = True


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
    mode = models.CharField(max_length=10)
    frequency = models.CharField(max_length=10)
    latency = models.CharField(max_length=10)
    capacity = models.CharField(max_length=10)


class PowerUnit(Product):
    power = models.IntegerField()
