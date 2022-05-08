from django.contrib import admin

from order.models import ObtainWay, Status, DeliveryAddress, OrderItem

admin.site.register(ObtainWay)
admin.site.register(Status)
admin.site.register(DeliveryAddress)
admin.site.register(OrderItem)
