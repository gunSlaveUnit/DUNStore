from django.contrib import admin

from store.models import Processor, SupplyType, Socket, Chipset, RAMType, RAMFrequency, RAMGeneration, RAMWorkingMode, \
    RAMLatency, RAM

admin.site.register(Processor)
admin.site.register(SupplyType)
admin.site.register(Socket)
admin.site.register(Chipset)
admin.site.register(RAMType)
admin.site.register(RAMFrequency)
admin.site.register(RAMGeneration)
admin.site.register(RAMWorkingMode)
admin.site.register(RAMLatency)
admin.site.register(RAM)
