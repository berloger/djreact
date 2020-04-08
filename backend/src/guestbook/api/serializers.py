from rest_framework import serializers

from guestbook.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('username', 'text')
