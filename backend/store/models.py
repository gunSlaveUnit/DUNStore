from abc import ABCMeta, abstractmethod

from django.db import models
from django.urls import reverse


class Product(models.Model):
    __metaclass__ = ABCMeta

    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=100, unique=True)
    price = models.IntegerField()
    is_published = models.BooleanField(default=True)

    @abstractmethod
    def __str__(self):
        pass

    @abstractmethod
    def get_absolute_url(self):
        pass


class SupplyType(models.Model):
    title = models.CharField(max_length=10)
    slug = models.SlugField(max_length=100, unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('supply_type_detail', kwargs={'slug': self.slug})


class Processor(Product):
    supply_type = models.ForeignKey(to=SupplyType, on_delete=models.PROTECT)
    cores_amount = models.IntegerField()
    threads_amount = models.IntegerField()
    technological_process = models.IntegerField()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('processor_detail', kwargs={'slug': self.slug})
