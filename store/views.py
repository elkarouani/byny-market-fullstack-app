from .models import Category, Order, OrderDetail, Product
from rest_framework import mixins, viewsets
from rest_framework import permissions
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer, OrderDetailSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('-updated_at')
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-updated_at')
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]


class OrderDetailViewSet(viewsets.ModelViewSet):
    queryset = OrderDetail.objects.all().order_by('-updated_at')
    serializer_class = OrderDetailSerializer
    permissions_classes = [permissions.IsAuthenticated]

    def update(self, instance, validated_data):
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.save()
        return instance


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-order_date')
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        # get all the order details without the order
        order_details = OrderDetail.objects.filter(order__isnull=True)

        # get the order
        order = Order.objects.create(user=request.user)

        # get the order details
        for order_detail in order_details:
            order_detail.order = order
            order_detail.save()
        
        return super().create(request, *args, **kwargs)

    def update(self, instance, validated_data):
        # set is closed to true or false
        instance.is_closed = validated_data.get('is_closed', instance.is_closed)

        instance.save()
        return instance
