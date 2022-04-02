from django.contrib import admin

from store.models import Motherboard, Processor, RAM, PowerUnit

admin.site.register(Motherboard)
admin.site.register(Processor)
admin.site.register(RAM)
admin.site.register(PowerUnit)
