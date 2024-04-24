from rest_framework import serializers
from ecommerceapp.models import Contact, Product,Orders, OrderUpdate


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
      model = Contact 
      fields = ['name','email','desc','phonenumber']


class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
          model = Product 
          fields = ['product_id ','product_name','category','subcategory','price','desc','image']

class OrdersSerializer(serializers.ModelSerializer):
    class Meta: 
          model = Orders 
          fields = ['order_id ','items_json','amount','name',' email','address1','address2','city ','county','zip_code','oid','amountpaid','paymentstatus','phone']

class OrderUpdateSerializer(serializers.ModelSerializer):
    class Meta: 
          model = OrderUpdate 
          fields = ['update_id ','order_id','update_desc',' delivered',' timestamp' ]