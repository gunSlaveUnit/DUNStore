from django.contrib import admin

from models import Processor, SupplyType, Socket, Chipset, RAMType, RAMFrequency, RAMGeneration, RAMWorkingMode, \
    RAMLatency, RAM, PowerUnit, Build

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
admin.site.register(PowerUnit)
admin.site.register(Build)
