from guestbook.api.views import CommentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CommentViewSet, basename='comments')
urlpatterns = router.urls


# from django.urls import path

# from .views import (
#     CommentListView,
#     CommentDetailView,
#     CommentCreateView
# )

# urlpatterns = [
#     path('', CommentListView.as_view()),
#     path('create/', CommentCreateView.as_view()),
#     path('<pk>', CommentDetailView.as_view()),
# ]

