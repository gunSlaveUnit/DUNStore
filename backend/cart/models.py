from django.db import models


class CartRow(models.Model):
    """ Stores the quantity and information about
    the product that a user with a
    specific token has placed in his cart """

    token = models.TextField(max_length=512)
    category = models.CharField(max_length=100)
    slug = models.CharField(max_length=200)
    amount = models.IntegerField()
