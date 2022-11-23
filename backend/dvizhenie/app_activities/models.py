from django.db import models
from django.utils.translation import gettext_lazy as _


class ActivityType(models.Model):
    name = models.CharField(_("activity type"), max_length=256, db_index=True)


class Activity(models.Model):
    name = models.CharField(_("activity name"), max_length=128, db_index=True)
    description = models.TextField(_("activity description"), max_length=256, blank=True)
    activity_type = models.ForeignKey(ActivityType, related_name="activity", on_delete=models.CASCADE)
    files = models.ManyToManyField('root.File', related_name="activities")
