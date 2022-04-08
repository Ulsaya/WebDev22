from django.db import models

class Product(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=20000)
    price = models.FloatField(default=0)
    description = models.CharField(max_length=10000)
    count = models.BigIntegerField()
    is_active = models.BooleanField(default=False)
    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }

class Category(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=20000)
    products = models.ManyToManyField(Product)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name
        }
