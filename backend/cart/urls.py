from django.urls import path

from cart.views import CartRowListAPIView, CartRowCreateAPIView

urlpatterns = [
    path('', CartRowListAPIView.as_view()),
    path('add', CartRowCreateAPIView.as_view()),
]
