from django.urls import path
from .views import MagazineView

urlpatterns = [
    path('magazines/', MagazineView.as_view()),
    path('magazines/<int:pk>/', MagazineView.as_view())
]
