from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.db import IntegrityError

from ecom.models import Product
from ecom.products import products

from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from .serializers import ProductSerializer,UserSerializer,UserSerializerWithToken



@api_view(['GET'])
def getRoutes(request):    
    return Response('Hello')

@api_view(['GET'])
def getProducts(request):   
    # products=Product.objects.all()
    # serializer=ProductSerializer(products,many=True)  

        
    return Response(products)

@api_view(['GET'])
def getProduct(request,pk):    
    # product=Product.objects.get(_id=pk)
    # serializer=ProductSerializer(product,many=False)
    product = None
    for i in products:
        if i['_id'] == pk:
          product = i
    return Response(product)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self,attrs):
        data=super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v   

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer
    
        


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def  getUserProfiles(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def  getUsers(request):
    user=User.objects.all()
    serializer=UserSerializer(user,many=True)
    return Response(serializer.data)


# register the new users

@api_view(['POST'])
def registerUser(request):
    data = request.data
    print(data)
    try:
        user = User.objects.create(
            first_name=data['first_name'],
            username=data['username'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except IntegrityError:  # Catching IntegrityError 
        message = {'details': 'USER WITH THIS EMAIL ALREADY EXIST'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
