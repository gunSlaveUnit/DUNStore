from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers

from cart.views import CartRowViewSet

router = routers.SimpleRouter()
router.register(r'', CartRowViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
