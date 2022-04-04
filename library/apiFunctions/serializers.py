from rest_framework import serializers
from .models import Book


#class BookSerializer(serializers.Serializer):
	#ID=serializers.IntegerField()
	#title=serializers.CharField(max_length=500)
	#author=serializers.CharField(max_length=500)
	#mrp=serializers.IntegerField()
	#date=serializers.DateTimeField()


	#def create(self, validated_data):
		#return Book.objects.create(validated_data)

	#def update(self,instance, validated_data):
		#instance.title=validated_data.get('title', instance.title)
		#instance.author=validated_data.get('author', instance.author)
		#instance.mrp=validated_data.get('mrp', instance.mrp)
		#instance.date=validated_data.get('date', instance.date)
		#instance.save()
		#return instance

class BookSerializer(serializers.ModelSerializer):
	class Meta:
		model=Book
		fields=['ID','title','author','mrp','date']
	
	