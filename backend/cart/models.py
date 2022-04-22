from django.db import models


class CartRow(models.Model):
    token = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    slug = models.CharField(max_length=200)

