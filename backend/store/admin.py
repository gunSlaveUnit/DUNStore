from django.contrib import admin

from store.models import Build, StorageDevice, VideoCard, Motherboard, Processor, RAM, PowerUnit

admin.site.register(Build)
admin.site.register(StorageDevice)
admin.site.register(VideoCard)
admin.site.register(Motherboard)
admin.site.register(Processor)
admin.site.register(RAM)
admin.site.register(PowerUnit)
