from django.contrib import admin

from order.models import ObtainWay, Status, DeliveryAddress

admin.site.register(ObtainWay)
admin.site.register(Status)
admin.site.register(DeliveryAddress)
