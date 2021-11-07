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

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

    def update(self, instance, validated_data):
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.save()
        return instance


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-order_date')
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # get all order details without order and created by the authenticated user
        order_details = OrderDetail.objects.filter(
            order__isnull=True,
            client=self.request.user
        )

        # create a new order
        order = serializer.save(client=self.request.user)

        # update the order details with the order
        for order_detail in order_details:
            order_detail.order = order
            order_detail.save()

        serializer.save(
            client=self.request.user,
            order=order
        )
