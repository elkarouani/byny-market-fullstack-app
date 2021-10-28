from django.db import models


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
