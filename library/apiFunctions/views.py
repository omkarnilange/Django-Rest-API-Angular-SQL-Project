from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.parsers import JSONParser
from .models import Book,Product,Category
from .serializers import BookSerializer,CategorySerializer, ProductSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import authentication, permissions

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
# Create your views here.


#@csrf_exempt
#@authentication_classes([SessionAuthentication, BasicAuthentication])
#@permission_classes([IsAuthenticated]
@api_view(['GET','POST'])
def book_list(request):
	if request.method=='GET':
		articles=Book.objects.all()
		serializer=BookSerializer(articles, many=True)
		#return JsonResponse(serializer.data, safe=False)
		return Response(serializer.data)

	elif request.method=='POST':
		#data=JSONParser().parse(request)
		serializer=BookSerializer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			#return JsonResponse(serializer.data,status=201)
			return Response(serializer.data,status=status.HTTP_201_CREATED)
		return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def category_list(request):
	if request.method=='GET':
		articles=Category.objects.all()
		serializer=CategorySerializer(articles, many=True)
		#return JsonResponse(serializer.data, safe=False)
		return Response(serializer.data)

	elif request.method=='POST':
		#data=JSONParser().parse(request)
		serializer=CategorySerializer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			#return JsonResponse(serializer.data,status=201)
			return Response(serializer.data,status=status.HTTP_201_CREATED)
		return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def product_list(request):
	if request.method=='GET':
		articles=Product.objects.all()
		serializer=ProductSerializer(articles, many=True)
		#return JsonResponse(serializer.data, safe=False)
		return Response(serializer.data)

	elif request.method=='POST':
		#data=JSONParser().parse(request)
		serializer=ProductSerializer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			#return JsonResponse(serializer.data,status=201)
			return Response(serializer.data,status=status.HTTP_201_CREATED)
		return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


#@csrf_exempt
@api_view(['GET','PUT','DELETE'])
def book_detail(request,pk):
	try:
		book=Book.objects.get(pk=pk)

	except Book.DoesNotExist:
		return HttpResponse(status=status.HTTP_404_NOT_FOUND)
		
	if request.method=='GET':
		serializer=BookSerializer(book)
		#return JsonResponse(serializer.data, safe=False)
		return Response(serializer.data)

	elif request.method=='PUT':
		#data=JSONParser().parse(request)
		serializer=BookSerializer(book,data=request.data)
		if serializer.is_valid():
			serializer.save()
			#return JsonResponse(serializer.data)
			return Response(serializer.data)
		#return JsonResponse(serializer.errors,status=400)
		return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

	elif request.method=='DELETE':
		book.delete()
		#return HttpResponse(status=204)
		return Response(status=status.HTTP_204_NO_CONTENT)



class ProfileView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)


class IndexView(APIView):
    
    def get(self, request, format=None):
        content = {
            'msg':"Hi, This is backend implemented using Django",
        }
        return Response(content)

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
			'username':user.username,
			'firstName': user.first_name,
			'lastName': user.last_name,
            'email': user.email
        })

class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)