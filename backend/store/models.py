from abc import ABCMeta, abstractmethod

from django.db import models


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


class Processor(Product):
    cores_amount = models.IntegerField()
    threads_amount = models.IntegerField()
    technological_process = models.IntegerField()

    def __str__(self):
        return self.title
