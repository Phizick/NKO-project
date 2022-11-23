from django.db import models
from django.utils.translation import gettext_lazy as _


class Partner(models.Model):
    name = models.CharField(_("name"), max_length=128, blank=True)


class Project(models.Model):
    name = models.CharField(_("name"), max_length=128, db_index=True)
    description = models.TextField(_("description"), max_length=2048, blank=True)
    start_timestamp = models.DateTimeField(_("start"))
    end_timestamp = models.DateTimeField(_("end"))
    is_finished = models.BooleanField(db_index=True, help_text=_("Is this project has finished?"))
    partners = models.ManyToManyField(Partner, related_name="projects")
    files = models.ManyToManyField('root.File', related_name="projects")
