from rest_framework import viewsets

from guestbook.models import Comment
from .serializers import CommentSerializer


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()  

# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView
# )


# class CommentListView(ListAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer


# class CommentDetailView(RetrieveAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class CommentCreateView(CreateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer


  

