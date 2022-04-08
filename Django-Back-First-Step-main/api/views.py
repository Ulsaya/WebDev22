from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest
from datetime import datetime, timedelta

def hello(request):
    return HttpResponse('<h1>Hello view function response!</h1>')

def show_time(request, hours):
    current_time = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(f'<h1>Time: {current_time}</h1>')

products = [
    {
        'id': i,
        'name': f'Product {i}',
        'price': i * 1000,
        'description': f'Description of {i}',
        'count': f'Count is {i + 5}',
        'is_active': True
    }
    for i in range(1, 10)
]
categories = [
    {
        'id': j,
        'name': f'Category {j}'
    }
    for j in range(1, 5)
]

def product_list(request):
    return JsonResponse(products, safe=False)

def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'Message': 'Product not found with selected id'})

def category_list(request):
    return JsonResponse(categories, safe=False)

def category_detail(request, category_id):
    for category in categories:
        if category['id'] == category_id:
            return JsonResponse(category)
    return JsonResponse({'Message': 'Category not found with selected id'})