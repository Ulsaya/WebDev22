from django.urls import path, re_path
from api.views import hello, show_time, product_list, product_detail, category_list, category_detail

urlpatterns = [
    path('hi/', hello),
    re_path('time/plus/(\d{1,2})/', show_time),
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_detail)
]