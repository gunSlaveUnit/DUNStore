from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from cart.views import CartRowListAPIView, CartRowCreateAPIView

urlpatterns = [
    path('', CartRowListAPIView.as_view()),
    path('add', CartRowCreateAPIView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
