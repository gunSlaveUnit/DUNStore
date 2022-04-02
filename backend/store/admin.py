from django.contrib import admin

from store.models import Processor, RAM, PowerUnit

admin.site.register(Processor)
admin.site.register(RAM)
admin.site.register(PowerUnit)
