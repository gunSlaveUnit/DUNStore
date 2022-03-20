from django.contrib import admin

from store.models import Processor, SupplyType


@admin.register(Processor)
class ProcessorAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


@admin.register(SupplyType)
class SupplyTypeAdmin(admin.ModelAdmin):
    pass
