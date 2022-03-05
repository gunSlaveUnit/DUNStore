from abc import ABCMeta, abstractmethod

from django.db import models


class Product(models.Model):
    __metaclass__ = ABCMeta

    title = models.CharField(max_length=50)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    is_published = models.BooleanField()

    @abstractmethod
    def __str__(self):
        pass
