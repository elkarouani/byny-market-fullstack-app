from django.urls import include, path
from rest_framework import routers
from .views import CategoryViewSet, ProductViewSet, OrderViewSet, OrderDetailViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-details', OrderDetailViewSet)

urlpatterns = [
    path('', include(router.urls)),
]