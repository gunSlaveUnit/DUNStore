from django.db import models

from users.models import User


class ObtainWay(models.Model):
    """ How the user can receive the goods,
    for example, by himself or by delivery """
    title = models.CharField(max_length=50)


class Status(models.Model):
    """ Order status: accepted, processed, issued, etc. """
    title = models.CharField(max_length=50)


class DeliveryAddress(models.Model):
    """ The address of the store for the
    issuance of goods or the address of the
    customer for delivery """

    city = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    building = models.CharField(max_length=100, null=True, blank=True)
    frame = models.CharField(max_length=100, null=True, blank=True)
    entrance = models.CharField(max_length=100, null=True, blank=True)
    floor = models.CharField(max_length=100, null=True, blank=True)
    is_store = models.BooleanField()


class OrderItem(models.Model):
    """ An order line for a single item in an order. """

    code = models.CharField(max_length=10)
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
