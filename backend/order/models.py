from django.db import models


class DeliveryAddress(models.Model):
    city = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    building = models.CharField(max_length=100, null=True)
    frame = models.CharField(max_length=100, null=True)
    entrance = models.CharField(max_length=100, null=True)
    floor = models.CharField(max_length=100, null=True)
