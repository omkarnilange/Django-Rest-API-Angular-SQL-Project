from django.contrib import admin
from .models import Book,Product,Category


from rest_framework.authtoken.admin import TokenAdmin
# Register your models here.
admin.site.register(Book)
admin.site.register(Product)
admin.site.register(Category)

TokenAdmin.raw_id_fields = ['user']