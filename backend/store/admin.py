from django.contrib import admin

from store.models import Processor, SupplyType, Socket, Chipset, RAMType


# TODO: make admin.register(model_name), not classes


@admin.register(Processor)
class ProcessorAdmin(admin.ModelAdmin):
    pass


@admin.register(SupplyType)
class SupplyTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Socket)
class SocketAdmin(admin.ModelAdmin):
    pass


@admin.register(Chipset)
class ChipsetAdmin(admin.ModelAdmin):
    pass


@admin.register(RAMType)
class SupportedRAMTypeAdmin(admin.ModelAdmin):
    pass
