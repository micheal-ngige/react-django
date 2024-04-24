from django.urls import path
from .views import CheckoutView, ProfileView,IndexView

urlpatterns = [
    path('', IndexView.as_view(), name='index'), 
    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('profile/', ProfileView.as_view(), name='profile'),
]
