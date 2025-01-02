from django.urls import path, include
from base.views import auth_views as views

urlpatterns = [
    path('dj-rest-auth/', include('dj_rest_auth.urls')),   
    path('dj-rest-auth/registration/account-confirm-email/<str:key>/', views.email_confirmation), 
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),    
    path('reset/password/confirm/<int:uid>/<str:token>', views.reset_password_confirm, name="password_reset_confirm"),
    path('dj-rest-auth/google/', views.GoogleLogin.as_view(), name='google_login'),
]
