from rest_framework import serializers
from dvizhenie.core.loading import get_model


__all__ = [
    'AboutTheFundSerializer',
    'ContactsSerializer',
    'FileSerializer',
    'QuestionSerializer',
    'AnswerSerializer',
]


AboutTheFund = get_model('root', 'AboutTheFund')
Contacts = get_model('root', 'Contacts')
File = get_model('root', 'File')
Question = get_model('root', 'Question')
Answer = get_model('root', 'Answer')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"


class AboutTheFundSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutTheFund
        fields = "__all__"


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = "__all__"


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"
