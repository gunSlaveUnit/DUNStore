from django.contrib import admin

from store.models import Category, Build, StorageDevice, VideoCard, Motherboard, Processor, RAM, PowerUnit


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Build)
admin.site.register(StorageDevice)
admin.site.register(VideoCard)
admin.site.register(Motherboard)
admin.site.register(Processor)
admin.site.register(RAM)
admin.site.register(PowerUnit)
