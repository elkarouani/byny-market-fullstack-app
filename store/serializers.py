from .models import Category, Product, Order, OrderDetail
from rest_framework import serializers


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['title']


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'description', 'price', 'size', 'product_category']


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ['user', 'order_date', 'details', 'is_closed']


class OrderDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ['order', 'product', 'quantity', 'price']
