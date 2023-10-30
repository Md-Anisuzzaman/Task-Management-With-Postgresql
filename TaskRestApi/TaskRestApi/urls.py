
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
    path('api/', include('Tasks.urls')),
    path('api-token-auth', views.obtain_auth_token)
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
