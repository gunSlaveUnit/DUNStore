from django.contrib import admin

from store.models import Processor


@admin.register(Processor)
class ProcessorAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
