from django.db import models
from django.utils.translation import gettext_lazy as _


class File(models.Model):
    file_field = models.FileField(
        _('file'), blank=True, upload_to='files_storage/'
    )
    is_fond_doc = models.BooleanField(_("is fond doc"), db_index=True, help_text=_("is file corporate or not"))
    capture = models.CharField(_("capture"), max_length=128, blank=True)

    def __str__(self):
        return self.capture

    class Meta:
        verbose_name = _("file")
        verbose_name_plural = _("files")


class AboutTheFund(models.Model):
    title = models.CharField(_("title"), max_length=128)
    info = models.TextField()

    class Meta:
        verbose_name = _("About the fund")
        verbose_name_plural = _("About the fund")

    def __str__(self):
        return self.title


class Contacts(models.Model):
    vk_url = models.URLField(_("vk url"), max_length=200, blank=True)
    inst_url = models.URLField(_("instagram url"), max_length=200, blank=True)
    phone = models.CharField(_("phone number"), max_length=11, blank=True)
    owner = models.CharField(_('The fund owner'), max_length=128, blank=True)
    address = models.ForeignKey('events.Address', verbose_name=_("address"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("contact")
        verbose_name_plural = _("contacts")

    def __str__(self):
        return self.owner
