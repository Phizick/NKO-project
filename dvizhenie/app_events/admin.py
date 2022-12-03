from django.contrib import admin, messages
from django.utils.translation import ngettext

from dvizhenie.core.loading import get_model


FundEvent = get_model('events', 'FundEvent')
Address = get_model('events', 'Address')


class FundEventAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'start_timestamp', 'end_timestamp', 'is_finished']
    actions = ['make_as_finished', 'make_as_in_process']
    filter_horizontal = ('files', 'addresses')
    fieldsets = (
        ('Название мероприятия', {
            'fields': ('name',)
        }),
        ('Дата, время и место', {
            'classes': ('collapse',),
            'fields': ('start_timestamp', 'end_timestamp', 'addresses', 'is_finished'),
        }),
        ('Файлы', {
            'classes': ('collapse',),
            'fields': ('files',)
        })
    )

    @admin.action(description='Сделать выбранные мероприятия законченными')
    def make_as_finished(self, request, queryset):
        updated = queryset.update(is_finished=True)
        self.message_user(request, ngettext(
            '%d event was successfully marked as finished.',
            '%d events were successfully marked as finished.',
            updated,
        ) % updated, messages.SUCCESS)

    @admin.action(description='Сделать выбранные мероприятия запланированными')
    def make_as_in_process(self, request, queryset):
        updated = queryset.update(is_finished=False)
        self.message_user(request, ngettext(
            '%d event was successfully marked as in process.',
            '%d events were successfully marked as in process.',
            updated,
        ) % updated, messages.SUCCESS)


class AddressAdmin(admin.ModelAdmin):
    list_display = ['id', 'address']


admin.site.register(FundEvent, FundEventAdmin)
admin.site.register(Address, AddressAdmin)
