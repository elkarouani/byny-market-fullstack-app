from django.db import models
from django.contrib.auth import get_user_model


class Category(models.Model):
    title = models.CharField(max_length=100, verbose_name="Category title")
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Created at")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self): return self.title


class Product(models.Model):
    title = models.CharField(max_length=120, verbose_name="Product title")
    description = models.TextField(
        blank=True, verbose_name="Product description")
    price = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name="Product price")
    size = models.PositiveIntegerField(verbose_name="Product size")
    product_category = models.ForeignKey(
        Category, verbose_name="Product Category", null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Created at")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")

    def __str__(self): return self.title


class Order(models.Model):
    client = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, verbose_name="Client")
    order_date = models.DateTimeField(
        auto_now_add=True, verbose_name="Order date")
    details = models.ManyToManyField(
        Product, through='OrderDetail', verbose_name="Product details")
    is_closed = models.BooleanField(default=False, verbose_name="Is closed")

    def __str__(self): return 'Client: {}, Order id: {}'.format(
        self.client.username, str(self.id))


class OrderDetail(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, verbose_name="Product")
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, verbose_name="Order", null=True, blank=True)
    price = models.DecimalField(
        max_digits=6, decimal_places=2, verbose_name="Price")
    quantity = models.IntegerField(verbose_name="Quantity")
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Created at")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")

    def __str__(self):
        return 'Client: {}, Product: {}, Order id: {}'.format(
            self.order.client.username,
            self.product.title,
            str(self.order.id)
        )
