from django.db import models
from django.utils.translation import gettext_lazy as _


class Address(models.Model):
    address = models.CharField(_("address"), max_length=256)


class Event(models.Model):
    name = models.CharField(_("name"), max_length=128, db_index=True)
    description = models.TextField(_("description"), max_length=2048, blank=True)
    start_timestamp = models.DateTimeField(_("start"))
    end_timestamp = models.DateTimeField(_("end"))
    is_finished = models.BooleanField(db_index=True, help_text=_("Is this event has finished?"))
    address = models.ManyToManyField(Address, related_name="events")
    files = models.ManyToManyField('root.File', related_name="events")
