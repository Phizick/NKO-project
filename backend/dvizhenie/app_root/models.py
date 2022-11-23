from django.db import models
from django.utils.translation import gettext_lazy as _


class File(models.Model):
    file_field = models.FileField(_('file'), blank=True, upload_to='files_storage/')
    is_fond_doc = models.BooleanField(_("is fond doc"), db_index=True, help_text=_("is file corporate or not"))


class FondDocs(models.Model):
    capture = models.CharField(_("capture"), blank=True)
    files = models.ManyToManyField(File, related_name='fond_docs')
