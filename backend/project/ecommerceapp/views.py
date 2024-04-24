from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import  ContactSerializer, ProductSerializer, OrdersSerializer, OrderUpdateSerializer
from .models import Contact, Product,Orders, OrderUpdate
from math import ceil
from django.http import JsonResponse
from itertools import chain
from django.views import View
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
# Create your views here.

class IndexView(View):
    def get(self, request):
        allProds = []
        catprods = Product.objects.values('category', 'id')
        cats = {item['category'] for item in catprods}
        for cat in cats:
            prod = Product.objects.filter(category=cat)
            n = len(prod)
            nSlides = n // 4 + ceil((n / 4) - (n // 4))
            allProds.append({'category': cat, 'products': list(prod.values()), 'nSlides': nSlides})
        return JsonResponse({'allProds': allProds})
    

class CheckoutView(View):
    @method_decorator(login_required)
    def post(self, request):
        items_json = request.POST.get('itemsJson', '')
        name = request.POST.get('name', '')
        amount = request.POST.get('amt')
        email = request.POST.get('email', '')
        address1 = request.POST.get('address1', '')
        address2 = request.POST.get('address2','')
        city = request.POST.get('city', '')
        state = request.POST.get('state', '')
        zip_code = request.POST.get('zip_code', '')
        phone = request.POST.get('phone', '')
        
        order = Orders(items_json=items_json, name=name, amount=amount, email=email, address1=address1, address2=address2, city=city, state=state, zip_code=zip_code, phone=phone)
        order.save()
        
        update = OrderUpdate(order_id=order.order_id, update_desc="the order has been placed")
        update.save()
        
        return JsonResponse({"message": "Order placed successfully."})

class ProfileView(generics.ListAPIView):
    serializer_class = OrdersSerializer

    @method_decorator(login_required)
    def get_queryset(self):
        current_user = self.request.user.username
        return Orders.objects.filter(email=current_user)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        current_user = self.request.user.username
        items = Orders.objects.filter(email=current_user)
        order_ids = [int(order.oid.replace("ShopyCart", "")) for order in items if order.oid.replace("ShopyCart", "").isdigit()]
        status = OrderUpdate.objects.filter(order_id__in=order_ids) if order_ids else []
        return JsonResponse({"orders": serializer.data, "status": [s.update_desc for s in status]})