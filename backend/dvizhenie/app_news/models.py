from django.db import models
from django.utils.translation import gettext_lazy as _


class News(models.Model):
    title = models.CharField(_("title"), max_length=128, db_index=True)
    description = models.TextField(_("description"), max_length=2048, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    short_description = models.TextField(_("short description"), max_length=512, blank=True)
    files = models.ManyToManyField('root.File', related_name="news")
