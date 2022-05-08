from django.db import models

from users.models import User


class ObtainWay(models.Model):
    title = models.CharField(max_length=50)


class Status(models.Model):
    title = models.CharField(max_length=50)


class DeliveryAddress(models.Model):
    city = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    building = models.CharField(max_length=100, null=True)
    frame = models.CharField(max_length=100, null=True)
    entrance = models.CharField(max_length=100, null=True)
    floor = models.CharField(max_length=100, null=True)


class OrderItem(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING)
    receiver_name = models.CharField(max_length=100)
    receiver_surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    alt_phone = models.CharField(max_length=20, null=True)
    obtain_method = models.ForeignKey(ObtainWay, models.DO_NOTHING)
    address = models.ForeignKey(DeliveryAddress, models.DO_NOTHING)
    status = models.ForeignKey(Status, models.DO_NOTHING)
    is_paid = models.BooleanField()
    category_slug = models.CharField(max_length=100)
    product_slug = models.CharField(max_length=100)
    amount = models.IntegerField()
    cost = models.IntegerField()
