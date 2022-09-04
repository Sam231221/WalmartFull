from ast import Or
from django.contrib import admin
from .models import Product, Order, OrderItem, Review, ShippingAddress
admin.site.register((Product, Order, OrderItem, Review, ShippingAddress
    ))