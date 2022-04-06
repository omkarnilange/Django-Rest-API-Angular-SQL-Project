from django.db import models

# Create your models here.
class Book(models.Model):
	ID=models.AutoField(primary_key=True)
	title=models.CharField(max_length=500)
	author=models.CharField(max_length=500)
	language=models.CharField(max_length=500, default='')
	category=models.IntegerField(default=0)
	mrp=models.IntegerField()
	date=models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

class Product(models.Model):
	productId=models.IntegerField(default=0)
	productName=models.CharField(max_length=500, default='')
	price=models.CharField(max_length=500, default='')
	quantityAvailable=models.IntegerField(default=0)
	categoryId=models.IntegerField(default=0)
	

class Category(models.Model):
	categoryId=models.IntegerField(default=0)
	categoryName=models.CharField(max_length=500, default='')


	 