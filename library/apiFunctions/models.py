from django.db import models

# Create your models here.
class Book(models.Model):
	ID=models.AutoField(primary_key=True)
	title=models.CharField(max_length=500)
	author=models.CharField(max_length=500)
	mrp=models.IntegerField()
	date=models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title